$(document).ready(function () {
  //서버와 연동
  const urlParams = new URLSearchParams(window.location.search);
  const orderNum = urlParams.get("orderNum");

  //sql연동부분
  // "추가" 버튼 클릭 이벤트 핸들러
  $(".btn-info").click(function () {
    // 주문 번호를 가져옴 (이 부분은 필요한 정보를 가져오는 방식에 따라 조정해야 함)
    const orderNum = new URLSearchParams(window.location.search).get("orderNum"); // 주문 번호 가져오는 함수를 정의해야 함

    if (orderNum) {
      // 주문 정보 업데이트 함수 호출
      updateOrder(orderNum);
    } else {
      console.error("주문 번호를 찾을 수 없습니다.");
    }
  });

  // updateOrder 함수 정의
  function updateOrder(orderNum) {
    const newData = {
      // 업데이트할 필드들의 값을 적절히 가져와 newData 객체에 넣어줘야 함
      count: parseInt($("#quantity").val()),
      op_t: $("input[name='temperature']:checked").val() === "뜨거움" ? 1 : 2,
      op_s: $("input[name='size']:checked").val() === "기본 크기" ? 3 : 4,
      op1: $("input[name='option_set_1']").prop('checked') ? 5 : 0,
      op2: $("input[name='option_set_2']").prop('checked') ? 6 : 0,
      op3: $("input[name='option_set_3']").prop('checked') ? 7 : 0,
      op4: $("input[name='option_set_4']").prop('checked') ? 8 : 0,
      op5: $("input[name='option_set_5']").prop('checked') ? 9 : 0,
      op6: $("input[name='option_set_6']").prop('checked') ? 10 : 0,
      op7: $("input[name='option_set_7']").prop('checked') ? 11 : 0,
      op8: $("input[name='option_set_8']").prop('checked') ? 12 : 0
    };

    // 서버로 업데이트 요청을 보냄
    fetch('/updateOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderNum: orderNum,
        newData: newData
      })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          console.log("주문 정보가 성공적으로 업데이트되었습니다.");
          // TODO: 업데이트 성공 시 수행할 작업을 추가
        } else {
          console.log("주문 정보 업데이트에 실패했습니다.");
        }
      })
      .catch(error => {
        console.error("주문 정보 업데이트 중 오류 발생:", error);
      });
  }
  //sql연동 끝

  /*------------------------tb_order-----------------------------------------------------------------------------------------------------------*/
  //08.17 tb_order와 연동 (서버로부터 주문 정보를 요청합니다.) - 클라이언트 측에서 주문 정보를 가져오고 처리하는 코드
  fetch(`/order/${orderNum}`)
    .then(response => response.json())
    .then(orderData => {
      console.log(orderData); // 서버에서 받은 주문 데이터를 확인해보세요
      handleOrderData(orderData); // 주문 데이터 처리 함수 호출

      // count 값을 가져와서 quantity input 요소의 초기 값으로 설정
      const quantityInput = document.getElementById("quantity");
      quantityInput.value = orderData.count || 1;

      // 주문 데이터를 기반으로 옵션 설정
      setOptionsFromOrderData(orderData);
    })
    .catch(error => {
      console.error("Error fetching order data:", error);
    });

  // 주문 데이터를 처리하고 렌더링하는 함수
  function handleOrderData(orderData) {
    console.log(orderData);
    // renderOrderDetail 함수를 호출하여 주문 데이터를 렌더링합니다.
    renderOrderDetail(orderData);
  }

  // 옵션 데이터를 주문 데이터에 따라 설정하는 함수
  function setOptionsFromOrderData(orderData) {
    const op_t = orderData.op_t;
    const op_s = orderData.op_s;


    // 온도 옵션 라디오 버튼 선택
    $(`input[name='temperature'][value='${op_t}']`).prop("checked", true);

    // 크기 옵션 라디오 버튼 선택
    $(`input[name='size'][value='${op_s}']`).prop("checked", true);

    // 옵션 체크박스 선택
    const optionValues = [5, 6, 7, 8, 9, 10, 11, 12]; // 체크박스에 해당하는 값들
    for (let i = 0; i < optionValues.length; i++) {
      const op_value = optionValues[i];
      const op_key = `op${i + 1}`;
      const checkboxId = `${op_value}Checkbox`;

      if (orderData[op_key] === op_value) {
        $(`input[id='${checkboxId}']`).prop("checked", true);
      }
    }
  }

  // 옵션 선택과 관련된 함수
  function handleOptionChange() {
    const op_t = $("input[name='temperature']:checked").val();
    const op_s = $("input[name='size']:checked").val();
    const op_checkboxes = $("input[name^='option']:checked");

    console.log("op_t:", op_t);
    console.log("op_s:", op_s);

    op_checkboxes.each(function () {
      const op_value = $(this).val();
      console.log("option", op_value, "is checked");
    });

    // 이후에 원하는 동작을 수행
  }

  // 온도 옵션 라디오 버튼
  $("input[name='temperature']").change(handleOptionChange);

  // 크기 옵션 라디오 버튼
  $("input[name='size']").change(handleOptionChange);

  // 옵션 체크박스
  $("input[name^='option']").change(handleOptionChange);

});

// 08.17 tb_order와 연동 (주문 정보를 출력하는 함수)
function renderOrderDetail(orderData) {
  const menuTitle = document.querySelector(".menu_title");
  const menuCost = document.querySelector(".menu_cost");
  const menuDescription = document.querySelector(".menu_description");

  const menuImage = document.querySelector(".menu_img_size");
  menuImage.src = orderData.picture;
  menuImage.alt = orderData.menu_name;

  menuTitle.textContent = orderData.menu_name;
  menuCost.textContent = `가격: ${orderData.menu_price}원`;
  menuDescription.textContent = orderData.menu_explan;

  const allegyList = document.querySelector(".allegy_list");
  allegyList.innerHTML = orderData.allergy_names
    .map(allegyName => `<li>${allegyName}</li>`)
    .join("");
}

$(".input-group").on("click", "#increment", function () {
  // .input-group 클래스를 가진 요소 내에서 #increment 버튼을 클릭했을 때 실행되는 함수
  var input = $(this).closest(".input-group").find("input");
  // 클릭한 버튼이 속한 .input-group 내에서 input 요소를 찾음
  input.val(parseInt(input.val()) + 1);
});

$(".input-group").on("click", "#decrement", function () {
  var input = $(this).closest(".input-group").find("input");
  if (parseInt(input.val()) > 1) {
    input.val(parseInt(input.val()) - 1);
  }
});