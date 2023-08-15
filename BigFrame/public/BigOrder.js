// script.js

var button = document.querySelector('.circle');
var colors = ['orange', 'pink'];
var currentIndex = 0;

button.addEventListener('click', function () {
  button.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
  alert("버튼이 클릭되었습니다!");
  window.location.href = '../detail_menu/jojo.html';
});

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

// 선택 버튼
const selectBtn = document.getElementById("selectBtn");
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

//네비게이션
function select_page() {
  alert("현재 페이지 입니다.")
};

// 처음으로
function check_page(){
  // 새로운 페이지로 이동
  const urlParams = new URLSearchParams(window.location.search);
  const orderType = urlParams.get('order');

  if (orderType == 'slow') {
    location.href = '../last_checklist/checklist.html?order=slow';
  } else if (orderType == 'basic') {
    location.href = '../last_checklist/checklist.html?order=basic';
  }
};

// 다음
function pay_page(){
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


// 하단 고정 버튼(이전화면, 처음으로, 다음)
// 이전화면 클릭시
function prvsScren() {
  const urlParams = new URLSearchParams(window.location.search);
  const orderType = urlParams.get('order');

  if (orderType == 'slow') {
    // 천천히 주문하기 버튼을 클릭한 경우
    location.href = '../selecteat/selecteat.html?order=slow';
  } else if (orderType == 'basic') {
    // 기본 주문하기 버튼을 클릭한 경우
    location.href = '../selecteat/selecteat.html?order=basic';
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
    location.href = '../last_checklist/checklist.html?order=slow';
  } else if (orderType == 'basic') {
    // 기본 주문하기 버튼을 클릭한 경우
    location.href = '../last_checklist/checklist.html?order=basic';
  }
};

// // 수량 조절 버튼
// const quantityControls = document.querySelectorAll('.quantity-control');

// quantityControls.forEach(control => {
//   const decreaseButton = control.querySelector('.decrease');
//   const increaseButton = control.querySelector('.increase');
//   const inputElement = control.querySelector('input');

//   decreaseButton.addEventListener('click', () => {
//     // 수량이 0 이상일 때만 감소
//     if (parseInt(inputElement.value) > 0) {
//       inputElement.value = parseInt(inputElement.value) - 1;
//     }
//   });

//   increaseButton.addEventListener('click', () => {
//     // 수량을 증가
//     inputElement.value = parseInt(inputElement.value) + 1;
//   });
// });

//사이즈 이동
const radioButtons = document.getElementsByName('size');
radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 선택된 라디오 버튼의 값에 따라 페이지 이동
    if (button.checked) {
      switch (button.value) {
        case 'basic':
          window.location.href = '../BasicFrame/BasicOrder.html?order=slow';
          break;
        case 'big':
          window.location.href = '../BigFrame/BigOrder.html?order=slow';
          break;
        default:
          break;
      }
    }
  });
}); 


// 검색버튼

document.getElementById("search_div").addEventListener('click', search);

function search(){
  document.getElementById("modalContainer").innerHTML = "";

  // help_msg.css를 제거합니다.
  const help_msg_Link = document.querySelector('link[href="../help_msg/help_msg.css"]');
  if (help_msg_Link) {
    help_msg_Link.remove();
  }

  // detail_menu.css를 제거합니다.
  const detailMenuLink = document.querySelector('link[href="../detail_menu/detail_menu.css"]');
  if (detailMenuLink) {
    detailMenuLink.remove();
  }

  fetch("../search/search.html") // 이 부분의 파일 경로를 수정해야합니다.
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
      linkElement.href = "../search/search.css"; // 이 부분의 파일 경로를 수정해야합니다.
      document.head.appendChild(linkElement);

      // 외부 detail_menu 폴더에 있는 detail_menu.js 파일을 로드합니다.
      const scriptElement = document.createElement("script");
      scriptElement.src = "../search/search.js"; // 이 부분의 파일 경로를 수정해야합니다.
      document.body.appendChild(scriptElement);
      

      const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
      modal.show();
    })
    .catch(error => {
      console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  const menuList = document.querySelector(".list_box"); // 변경: .list_content_box -> .list_box
  const categoryLinks = document.querySelectorAll(".categories a");

  // 카테고리 링크에 클릭 이벤트 추가
  categoryLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault(); // 링크의 기본 동작을 막습니다.
      const category = link.getAttribute("data-category");
      fetch(`/menu?category=${category}`)
        .then(response => response.json())
        .then(menuData => {
          // 메뉴 목록을 초기화하고 새로운 데이터로 갱신합니다.
          menuList.innerHTML = ''; // 변경: 내용을 지우도록 수정
          handleMenuData(menuData);
        });
    });
  });
});


function handleMenuData(menuData) {
  // 받아온 데이터를 가지고 출력할 HTML 요소 생성
  const menuItems = menuData.map(menu => {
    return `

      <div class="box list_content_box">
                    <div class="box list_img_box">
                        <img id="im" class="list_img_size" src="./image/img1.png" />
                    </div>
                    <div class="box list_content_info"> <!--오른쪽 설명-->
                        <div class="content_title">
                            <div class="menu_name">${menu.menu_name}</div>
                            <div class="menu_cost">${menu.price}원</div>
                        </div>
                        <div class="list_option">
                            <div>${menu.menu_explan}</div>
                        </div>
                        <div class="list_buttons">
                            <button class="selectBtn" id="selectBtn">선택</button>
                        </div>
                    </div>
                </div>
    `;
  });

  // 메뉴 목록에 추가
  const menuList = document.querySelector(".list_box");
  menuList.innerHTML += menuItems.join("");
}
