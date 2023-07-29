var button = document.querySelector('.circle');
var colors = ['orange', 'pink'];
var currentIndex = 0;

button.addEventListener('click', function () {
  button.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
  alert("버튼이 클릭되었습니다!");
  window.location.href = '../search/search.html';
});

// 도움말 버튼
const help= document.querySelectorAll('.help');
help.forEach((divElement) => {
    divElement.addEventListener('click', function() {
      // 이벤트 처리 로직 작성
      alert("검색을 선택하였습니다");
      window.location.href = '../help_msg/help_msg.html';
      
    });
  });

// 검색
var searchs = document.querySelector('.searchs');
searchs.addEventListener('click',function(){
  window.location.href = '../search/search.html';
});
const search= document.querySelectorAll('.search');
search.forEach((divElement) => {
    divElement.addEventListener('click', function() {
      // 이벤트 처리 로직 작성
      alert("검색을 선택하였습니다");
      window.location.href = '../search/search.html';
      
    });
  });

   
 // 하단 고정 버튼(이전화면, 처음으로, 다음)
 // 이전화면 클릭시
document.getElementById("prvsScren").addEventListener("click", function() {
  // 새로운 페이지로 이동
  window.location.href = "../selecteat/selecteat.html";
});

// 처음으로
document.getElementById("firstScreen").addEventListener("click", function() {
// 새로운 페이지로 이동
window.location.href = "../selectorder/selectorder.html";
});

// 다음
document.getElementById("nextScreen").addEventListener("click", function() {
// 새로운 페이지로 이동
window.location.href = "../last_checklist/checklist.html";
});

 // 메뉴 박스
const list_content_box = document.querySelectorAll('.list_content_box');

list_content_box.forEach((divElement) => {
  divElement.addEventListener('click', function() {
    // 이벤트 처리 로직 작성
    alert("선택되었습니다");
    window.location.href = '../detail_menu/jojo.html';
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
                    window.location.href = '../BasicFrame/BasicOrder.html';
                    break;
                case 'big':
                    window.location.href = '../BigFrame/BigOrder.html';
                    break;
                default:
                    break;
            }
        }
    });
});

