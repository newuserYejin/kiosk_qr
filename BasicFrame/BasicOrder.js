//도움말
const joImage = document.getElementById("imageLink");

joImage.addEventListener("click", function () {
  // 먼저 모달 컨테이너를 비웁니다.
  document.getElementById("modalContainer").innerHTML = "";

  // detail_menu.css를 제거합니다.
  const detailMenuLink = document.querySelector('link[href="http://localhost:3001/detail_menu/detail_menu.css"]');
  if (detailMenuLink) {
    detailMenuLink.remove();
  }

  // help_msg.html 콘텐츠를 로드하여 모달 컨테이너에 추가합니다.
  fetch("http://localhost:3001/help_msg/help_msg.html")
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
      linkElement.href = "http://localhost:3001/help_msg/help_msg.css";
      document.head.appendChild(linkElement);

      const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
      modal.show();
    })
    .catch(error => {
      console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
    });
});

// 선택 버튼(메뉴 선택)
const selectBtn = document.querySelectorAll(".list_content_box");
selectBtn.forEach(selectBtn => {
  selectBtn.addEventListener("click", function () {
    // 먼저 모달 컨테이너를 비웁니다.
    document.getElementById("modalContainer").innerHTML = "";
  
    // help_msg.css를 제거합니다.
    const detailMenuLink = document.querySelector('link[href="http://localhost:3001/help_msg/help_msg.css"]');
    if (detailMenuLink) {
      detailMenuLink.remove();
    }
  
    // 외부 detail_menu 폴더에 있는 jojo.html 파일을 로드하여 모달 컨테이너에 추가합니다.
    fetch("http://localhost:3001/detail_menu/jojo.html") // 이 부분의 파일 경로를 수정해야합니다.
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
        linkElement.href = "http://localhost:3001/detail_menu/detail_menu.css"; // 이 부분의 파일 경로를 수정해야합니다.
        document.head.appendChild(linkElement);
  
        // 외부 detail_menu 폴더에 있는 detail_menu.js 파일을 로드합니다.
        const scriptElement = document.createElement("script");
        scriptElement.src = "http://localhost:3001/detail_menu/detail_menu.js"; // 이 부분의 파일 경로를 수정해야합니다.
        document.body.appendChild(scriptElement);
  
        const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();
      })
      .catch(error => {
        console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
      });
  });
});

//네비게이션
function select_page() {
  alert("현재 페이지 입니다.")
};

// 확인 페이지로 이동
function check_page(){
  const urlParams = new URLSearchParams(window.location.search);
  const orderType = urlParams.get('order');

  if (orderType == 'slow') {
    location.href = 'http://localhost:3001/last_checklist/checklist.html?order=slow';
  } else if (orderType == 'basic') {
    location.href = 'http://localhost:3001/last_checklist/checklist.html?order=basic';
  }
};

// 결제 페이지로 이동
function pay_page(){
  const urlParams = new URLSearchParams(window.location.search);
  const orderType = urlParams.get('order');

  if (orderType == 'slow') {
    // 천천히 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/paymethod/paymethod.html?order=slow';
  } else if (orderType == 'basic') {
    // 기본 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/paymethod/paymethod.html?order=basic';
  }
};

// 검색버튼

document.getElementById("search_div").addEventListener('click', search);

function search(){
  document.getElementById("modalContainer").innerHTML = "";

  // help_msg.css를 제거합니다.
  const help_msg_Link = document.querySelector('link[href="http://localhost:3001/help_msg/help_msg.css"]');
  if (help_msg_Link) {
    help_msg_Link.remove();
  }

  // detail_menu.css를 제거합니다.
  const detailMenuLink = document.querySelector('link[href="http://localhost:3001/detail_menu/detail_menu.css"]');
  if (detailMenuLink) {
    detailMenuLink.remove();
  }

  fetch("http://localhost:3001/search/search.html") // 이 부분의 파일 경로를 수정해야합니다.
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
      linkElement.href = "http://localhost:3001/search/search.css"; // 이 부분의 파일 경로를 수정해야합니다.
      document.head.appendChild(linkElement);

      // 외부 detail_menu 폴더에 있는 detail_menu.js 파일을 로드합니다.
      const scriptElement = document.createElement("script");
      scriptElement.src = "http://localhost:3001/search/search.js"; // 이 부분의 파일 경로를 수정해야합니다.
      document.body.appendChild(scriptElement);
      

      const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
      modal.show();
    })
    .catch(error => {
      console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
    });
}

// 하단 고정 버튼(이전화면, 처음으로, 다음)
// 이전화면 클릭시
function prvsScren() {
  const urlParams = new URLSearchParams(window.location.search);
  const orderType = urlParams.get('order');

  if (orderType == 'slow') {
    // 천천히 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/selecteat/selecteat.html?order=slow';
  } else if (orderType == 'basic') {
    // 기본 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/selecteat/selecteat.html?order=basic';
  }
};

// 처음으로
function firstScreen(){
  // 새로운 페이지로 이동
  window.location.href = "http://localhost:3001/selectorder/selectorder.html";
};

// 다음
function nextScreen(){
  // 새로운 페이지로 이동
  const urlParams = new URLSearchParams(window.location.search);
  const orderType = urlParams.get('order');

  if (orderType == 'slow') {
    // 천천히 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/last_checklist/checklist.html?order=slow';
  } else if (orderType == 'basic') {
    // 기본 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/last_checklist/checklist.html?order=basic';
  }
};

/*슬라이드 버튼*/
const slider = document.querySelector(".slider");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let slideIndex = 0;

prevBtn.addEventListener("click", () => {
  slideIndex = Math.max(slideIndex - 1, 0);
  updateSliderPosition();
});

nextBtn.addEventListener("click", () => {
  slideIndex = Math.min(slideIndex + 1, slider.children.length - 1);
  updateSliderPosition();
});

function updateSliderPosition() {
  const slideWidth = slider.clientWidth;
  const offset = -slideWidth * slideIndex;
  slider.style.transform = `translateX(${offset}px)`;
}

//사이즈 이동
const radioButtons = document.getElementsByName('size');
radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 선택된 라디오 버튼의 값에 따라 페이지 이동
    if (button.checked) {
      const urlParams = new URLSearchParams(window.location.search);
      const currentOrder = urlParams.get('order');
      
      switch (button.value) {
        case 'big':
          if (currentOrder === 'slow') {
            window.location.href = 'http://localhost:3001/BigFrame/BigOrder.html?order=slow';
          } else if (currentOrder === 'basic') {
            window.location.href = 'http://localhost:3001/BigFrame/BigOrder.html?order=basic';
          }
          break;
        case 'basic':
          if (currentOrder === 'slow') {
            window.location.href = 'http://localhost:3001/BasicFrame/BasicOrder.html?order=slow';
          } else if (currentOrder === 'basic') {
            window.location.href = 'http://localhost:3001/BasicFrame/BasicOrder.html?order=basic';
          }
          break;
        default:
          break;
      }
    }
  });
});

//서버연동 08.14
document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider"); // slider 컨테이너

  const categoryLinks = document.querySelectorAll(".categories a");

  const defaultCategory = "1";

  fetch(`/menu?category=${defaultCategory}`)
    .then(response => response.json())
    .then(menuData => {
      clearSliderContainer(sliderContainer); // 슬라이더 컨테이너 내용 지우기
      handleMenuData(menuData, sliderContainer); // 메뉴 데이터 추가
    });

  categoryLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const category = link.getAttribute("data-category");
      fetch(`/menu?category=${category}`)
        .then(response => response.json())
        .then(menuData => {
          clearSliderContainer(sliderContainer); // 슬라이더 컨테이너 내용 지우기
          handleMenuData(menuData, sliderContainer); // 메뉴 데이터 추가

          slideIndex = 0;
          updateSliderPosition();
        });
    });
  });
});

function clearSliderContainer(sliderContainer) {
  sliderContainer.innerHTML = ''; // 슬라이더 컨테이너의 내용 지우기
}

function handleMenuData(menuData, sliderContainer) {
  const menuItemsPerSlide = 9; // 슬라이드당 메뉴 개수
  let currentSlide = document.createElement("div");
  currentSlide.className = "slide";

  menuData.forEach((menu, index) => {
    if (index > 0 && index % menuItemsPerSlide === 0) {
      sliderContainer.appendChild(currentSlide);
      currentSlide = document.createElement("div");
      currentSlide.className = "slide";
    }

    const menuHTML = `
      <div class="box list_content_box" id="list_click">
        <div class="box list_img_box">
          <img class="list_img_size" src=".${menu.image_path}" alt="${menu.menu_name}">
        </div>
        <div class="box list_content_info">
          <div class="container text-center">
            <div class="content_title">
              <div class="menu_name">${menu.menu_name}</div>
              <div class="menu_cost">${menu.price}원</div>
            </div>
          </div>
        </div>
      </div>
    `;

    currentSlide.innerHTML += menuHTML;
  });

  // 마지막에 남은 슬라이드 추가
  sliderContainer.appendChild(currentSlide);
  const selectBtn = document.querySelectorAll(".list_content_box");
    selectBtn.forEach(selectBtn => {
      selectBtn.addEventListener("click", function () {
        // 먼저 모달 컨테이너를 비웁니다.
        document.getElementById("modalContainer").innerHTML = "";

        // help_msg.css를 제거합니다.
        const detailMenuLink = document.querySelector('link[href="http://localhost:3001/help_msg/help_msg.css"]');
        if (detailMenuLink) {
          detailMenuLink.remove();
        }

        // 외부 detail_menu 폴더에 있는 jojo.html 파일을 로드하여 모달 컨테이너에 추가합니다.
        fetch("http://localhost:3001/detail_menu/jojo.html") // 이 부분의 파일 경로를 수정해야합니다.
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
            linkElement.href = "http://localhost:3001/detail_menu/detail_menu.css"; // 이 부분의 파일 경로를 수정해야합니다.
            document.head.appendChild(linkElement);

            // 외부 detail_menu 폴더에 있는 detail_menu.js 파일을 로드합니다.
            const scriptElement = document.createElement("script");
            scriptElement.src = "http://localhost:3001/detail_menu/detail_menu.js"; // 이 부분의 파일 경로를 수정해야합니다.
            document.body.appendChild(scriptElement);

            const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
            modal.show();
          })
          .catch(error => {
            console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
          });
      });
    });
}
