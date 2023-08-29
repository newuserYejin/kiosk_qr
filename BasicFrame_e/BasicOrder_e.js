var button = document.querySelector('.circle');
var colors = ['orange', 'pink'];
var currentIndex = 0;

button.addEventListener('click', function () {
  button.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
  window.location.href = 'http://localhost:3001/search/search.html';
});


// URL에서 "order" 파라미터 값을 확인하여 다른 페이지로 이동
const urlParams = new URLSearchParams(window.location.search);
const orderType = urlParams.get('order');
// 네비바 클릭 이동
function openSelect() {
  
    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = 'http://localhost:3001/BigFrame_e/BigOrder_e.html?order=slow';
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = 'http://localhost:3001/BasicFrame_e/BasicOrder_e.html?order=basic';
    } else {
        location.href = 'http://localhost:3001/selectorder/selectorder.html';
    }
 
}
function openCheck() {
  if (orderType === 'slow') {
    // 천천히 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/last_checklist_e/checklist_e.html?order=slow';
  } else if (orderType === 'basic') {
    // 기본 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/last_checklist_e/checklist_e.html?order=basic';
  } else {
    location.href = 'http://localhost:3001/selectorder/selectorder.html';
  }
  
}
function openPay() {
  if (orderType === 'slow') {
    // 천천히 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/paymethod_e/paymethod_e.html?order=slow';
  } else if (orderType === 'basic') {
    // 기본 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/paymethod_e/paymethod_e.html?order=basic';
  } else {
    location.href = 'http://localhost:3001/selectorder/selectorder.html';
  }
  
  
}

//주문리스트 미리보기
function orderlist(){
  if (orderType === 'slow') {
    // 천천히 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/last_checklist_e/checklist_e.html?order=slow';
    } else if (orderType === 'basic') {
    // 기본 주문하기 버튼을 클릭한 경우
    location.href = 'http://localhost:3001/last_checklist_e/checklist_e.html?order=basic';
    } else {
    location.href = 'http://localhost:3001/selectorder/selectorder.html';
    }
}

//도움말 버튼
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
document.getElementById('prvsScren').addEventListener('click', function () {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('order', 'basic'); // 'order' 파라미터를 'slow' 값으로 설정
  // 기존 URL에 파라미터를 추가한 새 URL로 이동
  window.location.href = `http://localhost:3001/selecteat_e/selecteat_e.html?${urlParams}`;
});

// 처음으로
document.getElementById("firstScreen").addEventListener("click", function () {
  // 새로운 페이지로 이동
  window.location.href = "http://localhost:3001/selectorder_e/selectorder_e.html";
});

// 다음
document.getElementById("nextScreen").addEventListener("click", function () {
  // 새로운 페이지로 이동
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('order', 'basic');
  // 기존 URL에 파라미터를 추가한 새 URL로 이동
  window.location.href = `http://localhost:3001/last_checklist_e/checklist_e.html?${urlParams}`;
 
});




// 버튼들의 클래스명을 'selectBtn'으로 가지고 있는 모든 요소들을 선택합니다.
const list_content_box = document.querySelectorAll(".list_content_box");

// 각 버튼에 대해 반복문을 통해 이벤트 핸들러를 등록합니다.
list_content_box.forEach(button => {
  button.addEventListener("click", function () {
    // 버튼이 클릭되었을 때 실행되는 코드

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

// 크기 조절 버튼
const radioButtons = document.getElementsByName('size');
radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    // 선택된 라디오 버튼의 값에 따라 페이지 이동
    if (button.checked) {
      switch (button.value) {
        case 'basic':
          window.location.href = 'http://localhost:3001/BasicFrame_e/BasicOrder_e.html?order=basic';
          break;
        case 'big':
          window.location.href = 'http://localhost:3001/BigFrame_e/BigOrder_e.html?order=slow';
          break;
        default:
          break;
      }
    }
  });
});

