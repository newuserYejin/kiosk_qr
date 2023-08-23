// 페이지 로딩 후 모달 창을 자동으로 표시합니다.
// document.addEventListener("DOMContentLoaded", function () {
//   const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
//   modal.show();
// })

document.addEventListener("DOMContentLoaded", function () {
  const incrementButtons = document.querySelectorAll(".input-group #increment");
  const decrementButtons = document.querySelectorAll(".input-group #decrement");

  incrementButtons.forEach(button => {
    button.addEventListener("click", function () {
      const input = this.closest(".input-group").querySelector("input");
      input.value = parseInt(input.value) + 1;
    });
  });

  decrementButtons.forEach(button => {
    button.addEventListener("click", function () {
      const input = this.closest(".input-group").querySelector("input");
      if (parseInt(input.value) > 1) {
        input.value = parseInt(input.value) - 1;
      }
    });
  });
});

/*서버 연동 08.14*/
// 페이지 로딩 후 모달 창을 자동으로 표시합니다.
const urlParams = new URLSearchParams(window.location.search);
const menuId = urlParams.get("menuId");

// 서버로부터 메뉴 정보를 요청합니다.
fetch(`/menu/${menuId}`)
  .then(response => response.json())
  .then(menuData => {
    console.log(menuData); // 서버에서 받은 메뉴 데이터를 확인해보세요
    renderMenuDetail(menuData);
  })
  .catch(error => {
    console.error("Error fetching menu data:", error);
  });

// 메뉴 정보를 출력하는 함수
function renderMenuDetail(menuData) {
  const menuTitle = document.querySelector(".menu_title");
  const menuCost = document.querySelector(".menu_cost");
  const menuDescription = document.querySelector(".menu_explain_detail");
  const menuImage = document.querySelector(".menu_img_size");

  menuTitle.textContent = menuData.menuData.menu_name;
  menuCost.textContent = `가격: ${menuData.menuData.price}원`;
  menuDescription.textContent = menuData.menuData.menu_explan;
  
  const img_pp = `.${menuData.image_path}`
  menuImage.src = img_pp;
  menuImage.alt = menuData.menu_name;
  
  // 알레르기 정보 출력
  const allegyList = document.querySelector(".allegy_list");
  allegyList.innerHTML = menuData.allegy_names
    .map(allegyName => `<li>${allegyName}</li>`)
    .join("");

  // 옵션 정보 출력
  const container_box = document.querySelector(".op_box");
  const optionContainers = document.querySelectorAll(".option_inner_bow");

// 각 옵션 컨테이너마다 처리
optionContainers.forEach((container, index) => {
  const optionList = container.querySelector(".list-group");
  let currentSet = 0; // 현재 세트 번호

  // DB에서 가져온 옵션 데이터가 없을 경우 컨테이너 숨김
  const all_modal = document.querySelector(".modal-dialog");
  const r_box = document.querySelector(".r_box");
  if (menuData.op_data.length == 0) {
    r_box.style.marginTop = "20px";
    all_modal.style.height = "auto";
    container_box.style.display = "none";
    return; // 옵션 데이터 없으면 여기서 종료
  }

  if (index === 0) {
    optionList.innerHTML = menuData.op_data
      .filter(option => option.op_name === "뜨거움" || option.op_name === "차가움")
      .map(option => {
        const checkedAttribute = option.op_name === "뜨거움" ? "checked" : "";
        return `<li class="list-group-item"><input class="form-check-input me-1" type="radio" name="temperature"  id="${option.op_name}" value="${option.op_name}" ${checkedAttribute}>
        <label class="form-check-label" for="${option.op_name}">${option.op_name} (+${option.op_price}원)</label></li>`;
      })
      .join("");
  } else if (index === 1) {
    optionList.innerHTML = menuData.op_data
      .filter(option => option.op_name === "기본 크기" || option.op_name === "큰 크기")
      .map(option => {
        const checkedAttribute = option.op_name === "기본 크기" ? "checked" : "";
        return `<li class="list-group-item"><input class="form-check-input me-1" type="radio" name="size"  id="${option.op_name}" value="${option.op_name}" ${checkedAttribute}>
        <label class="form-check-label" for="${option.op_name}">${option.op_name} (+${option.op_price}원)</label></li>`;
      })
      .join("");
  } else if (index === 2) {
    // 세번째 박스에는 나머지 옵션 중 체크박스 옵션 4개를 넣습니다.
    const checkboxOptions = menuData.op_data
      .filter(option => option.op_name !== "뜨거움" && option.op_name !== "차가움" && option.op_name !== "기본 크기" && option.op_name !== "큰 크기")
      .slice(0, 4); // 첫 4개의 체크박스 옵션 선택

    optionList.innerHTML = checkboxOptions
      .map(option => {
        currentSet++;
        return `<li class="list-group-item chch"><input class="form-check-input me-1" type="checkbox" id="${option.op_name}" name="option_set_${currentSet}" value="${option.op_name}">
        <label class="form-check-label" for="${option.op_name}">${option.op_name} (+${option.op_price}원)</label></li>`;
      })
      .join("");
  } else if (index === 3) {
    // 네번째 박스에는 나머지 체크박스 옵션을 넣습니다.
    const checkboxOptions = menuData.op_data
      .filter(option => option.op_name !== "뜨거움" && option.op_name !== "차가움" && option.op_name !== "기본 크기" && option.op_name !== "큰 크기")
      .slice(4); // 남은 체크박스 옵션 선택

    optionList.innerHTML = checkboxOptions
      .map(option => {
        currentSet++;
        return `<li class="list-group-item chch"><input class="form-check-input me-1" type="checkbox" id="${option.op_name}" name="option_set_${currentSet}" value="${option.op_name}">
        <label class="form-check-label" for="${option.op_name}">${option.op_name} (+${option.op_price}원)</label></li>`;
      })
      .join("");
  }
});

}

// function handleMenuData(menuData) {
//   // 받아온 데이터를 가지고 출력할 HTML 요소 생성
//   const menuDetailHtml = menuData.map(menu => {
//     return `
//     <div class="menu_img_box">
//       <img class="menu-img-size" src="${menu.image_path}" alt="${menu.menu_name}">
//     </div>

//     <div class="menu_title">${menu.menu_name}</div>
//     <div class="menu_cost">가격: ${menu.price}원</div>
//     <div class="menu_description">${menu.menu_explan}</div>
    
//     <div class="allegy_list">
//       <p class="allegy_name">알레르기 정보</p>
//       <ul>
//         ${menu.allegy_names.map(allegyName => `<li>${allegyName}</li>`).join("")}
//       </ul>
//     </div>

//     <div class="option_list">
//       <p class="option_name">옵션 정보</p>
//       <ul>
//       ${menu.op_data.map(option => `<li>${option.op_name} (+${option.op_price}원)</li>`).join("")}
//       </ul>
//     </div>

//     <div class="num_check">
//       <div class="input-group">
//         <div class="input-group-prepend">
//           <button class="btn btn-outline-secondary" id="decrement">-</button>
//         </div>
//         <input type="text" class="form-control" id="quantity" value="1" readonly>
//         <div class="input-group-append">
//           <button class="btn btn-outline-secondary" id="increment">+</button>
//         </div>
//       </div>
//     </div>
//   `;
//   });

//   // 메뉴 상세 정보를 출력하는 영역을 선택하고 내용을 추가
//   const menuDetailContainer = document.querySelector(".menu-detail-container");
//   menuDetailContainer.innerHTML += menuDetailHtml.join("");

//   // jQuery 이벤트 핸들러 등록
//   $(".input-group").on("click", "#increment", function () {
//     var input = $(this).closest(".input-group").find("input");
//     input.val(parseInt(input.val()) + 1);
//   });

//   $(".input-group").on("click", "#decrement", function () {
//     var input = $(this).closest(".input-group").find("input");
//     if (parseInt(input.val()) > 1) {
//       input.val(parseInt(input.val()) - 1);
//     }
//   });
// }