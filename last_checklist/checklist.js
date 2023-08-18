// script.js

var button = document.querySelector('.circle');

// 증감기능 삭제
// document.addEventListener("DOMContentLoaded", function () {
//   var decrementButton = document.getElementById("decrement");
//   var incrementButton = document.getElementById("increment");
//   var quantityInput = document.getElementById("quantity");

//   decrementButton.addEventListener("click", function () {
//     var currentQuantity = parseInt(quantityInput.value);
//     if (currentQuantity > 1) {
//       quantityInput.value = currentQuantity - 1;
//     }
//   });

//   incrementButton.addEventListener("click", function () {
//     var currentQuantity = parseInt(quantityInput.value);
//     quantityInput.value = currentQuantity + 1;
//   });
// });

//네비게이션 부분
function selectPage(){
  var URL = new URLSearchParams(window.location.search);
  var order_info = URL.get('order');

  if(order_info == 'slow'){
    window.location.href = "../BigFrame/BigOrder.html?order=slow"
  } else if(order_info == 'basic'){
    window.location.href = "../BasicFrame/BasicOrder.html?order=basic"
  }
}

function openPay(){
  var URL = new URLSearchParams(window.location.search);
  var order_info = URL.get('order');

  if(order_info == 'slow'){
    window.location.href = "../paymethod/paymethod.html?order=slow"
  } else if(order_info == 'basic'){
    window.location.href = "../paymethod/paymethod.html?order=basic"
  }
}

function prvsScren() {
  const urlParams = new URLSearchParams(window.location.search);
  const orderType = urlParams.get('order');

  if (orderType == 'slow') {
    // 천천히 주문하기 버튼을 클릭한 경우
    location.href = '../BigFrame/BigOrder.html?order=slow';
  } else if (orderType == 'basic') {
    // 기본 주문하기 버튼을 클릭한 경우
    location.href = '../BasicFrame/BasicOrder.html?order=basic';
  }
};

// 처음으로
function firstScreen(){
  // 새로운 페이지로 이동
  window.location.href = "../selectorder/selectorder.html";
};

// 다음
function nextScreen(){
  // 새로운 페이지로 이동
  const urlParams = new URLSearchParams(window.location.search);
  const orderType = urlParams.get('order');

  if (orderType == 'slow') {
    // 천천히 주문하기 버튼을 클릭한 경우
    location.href = '../paymethod/paymethod.html?order=slow';
  } else if (orderType == 'basic') {
    // 기본 주문하기 버튼을 클릭한 경우
    location.href = '../paymethod/paymethod.html?order=basic';
  }
};

//도움말 버튼
const joImage = document.getElementById("imageLink");

joImage.addEventListener("click", function () {
  // 먼저 모달 컨테이너를 비웁니다.
  document.getElementById("modalContainer").innerHTML = "";

  // detail_menu.css를 제거합니다.
  const detailMenuLink = document.querySelector('link[href="../detail_menu/detail_menu.css"]');
  if (detailMenuLink) {
    detailMenuLink.remove();
  }

  // help_msg.html 콘텐츠를 로드하여 모달 컨테이너에 추가합니다.
  fetch("../help_msg/help_msg.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP Error " + response.status);
      }
      return response.text();
    })
    .then(data => {
      // 모달 컨테이너에 help_msg.html 콘텐츠를 추가합니다.
      $("#modalContainer").html(data);
      const modalBody = document.querySelector(".modal-body");
      modalBody.innerHTML = `
        <p>도움말 새로운 내용 1.</p>
        <p>새로운 내용 2.</p>
        <p>새로운 내용 3.</p>
        <!-- 원하는 내용으로 수정 -->`;

      // help_msg.css 파일을 로드합니다.
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.type = "text/css";
      linkElement.href = "../help_msg/help_msg.css";
      document.head.appendChild(linkElement);

      const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
      modal.show();
    })
    .catch(error => {
      console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
    });
});

document.addEventListener("DOMContentLoaded", function () {//서버연동(DOMContentLoaded가 실행되고 서버를 실행되어야지 정상적으로 작동[사실 잘 모르겠음])
  fetch('/getOrderData')
      .then(response => response.json())
      .then(data => {
          addOrdersToDOM(data);
          console.log("Session data:", JSON.stringify(data));
      });
});

function createOrderItem(order) {//주문 아이템 생성 함수
  const orderItem = document.createElement('div');
  orderItem.className = 'box list_content_box';
  orderItem.innerHTML = `
<!-- ... (이미지 내용 관련 부분) ... -->
<div class="box list_img_box">
                      <img id="im" class="list_img_size" src="${order.imagePath}" alt="menu_image"/>
                  </div>
                  <!--여기까지-->
                  <div class="box list_content_info">
                      <div class="container text-center">
                          <div class="row content_title">
                              <div class="col-7 menu_name">${order.menu_name}</div> <!--메뉴 이름 출력-->
                              <div class="col-5 menu_cost">&nbsp;총: ${order.total_price}원</div> <!--메뉴 가격 출력-->
                          </div>
                          <!--옵션 데이터-->
                          <div class="row list_option">
                              <div class="list_option_detail">
                                  <p class="option_title">현재 선택 내용</p>
                                  <div class="option_detail">
                                      <div>
                                          <span class="option_name">온도: </span>
                                          <span class="select_tem">${order.op1}</span>
                                      </div>
                                      <div>
                                          <span class="option_name">크기: </span>
                                          <span class="select_size">${order.op2}</span>
                                      </div>
                                  </div>

                              </div>
                          </div>
                          <div class="row list_buttons">
                              <div class="col-4 button_box_num">
                                  <p class="button_num">${order.count}개</p>
                              </div>
                              <div class="col-8" style="padding: 0px; height: 100%;">
                                  <div class="content_update_button">
                                      <button id="updateBtn">수정</button>
                                      <button>삭제</button>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div>
`;

  // //   이미지 표시 로직
  //   const imgBox = orderItem.querySelector('.box.list_content_info .container .order-list .order-item');
  //   displayImage(order.imagePath, imgBox); // 이미지 표시 함수 호출

    return orderItem;
}

function addOrdersToDOM(orders) {
  let orderList = document.querySelector('.list_box');

  orders.forEach(order => {
      const orderItem = createOrderItem(order);
      orderList.appendChild(orderItem);
  });
}


//수정 버튼
const selectBtn = document.getElementById("updateBtn");
selectBtn.addEventListener("click", function () {

  // 먼저 모달 컨테이너를 비웁니다.
  document.getElementById("modalContainer").innerHTML = "";

  // help_msg.css를 제거합니다.
  const detailMenuLink = document.querySelector('link[href="../help_msg/help_msg.css"]');
  if (detailMenuLink) {
    detailMenuLink.remove();
  }

  // 외부 detail_menu 폴더에 있는 jojo.html 파일을 로드하여 모달 컨테이너에 추가합니다.
  fetch("../detail_menu/jojo.html") // 이 부분의 파일 경로를 수정해야합니다.
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP Error " + response.status);
      }
      return response.text();
    })
    .then(data => {
      // 모달 컨테이너에 jojo.html 콘텐츠를 추가합니다.
      $("#modalContainer").html(data);

      // 외부 detail_menu 폴더에 있는 detail_menu.css 파일을 로드합니다.
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.type = "text/css";
      linkElement.href = "../detail_menu/detail_menu.css"; // 이 부분의 파일 경로를 수정해야합니다.
      document.head.appendChild(linkElement);

      // 외부 detail_menu 폴더에 있는 detail_menu.js 파일을 로드합니다.
      const scriptElement = document.createElement("script");
      scriptElement.src = "../detail_menu/detail_menu.js"; // 이 부분의 파일 경로를 수정해야합니다.
      document.body.appendChild(scriptElement);

      const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
      modal.show();
    })
    .catch(error => {
      console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
    });
});


