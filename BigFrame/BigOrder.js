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

// 선택 버튼
const selectBtn = document.querySelectorAll('.selectBtn');
selectBtn.forEach((divElement)=>{
  divElement.addEventListener('click', function() {
    alert("선택되었습니다");
    window.location.href = '../detail_menu/jojo.html';
  });
});

// 검색버튼

const search= document.querySelectorAll('.search, .searchs');
search.forEach((divElement) => {
    divElement.addEventListener('click', function() {
      // 이벤트 처리 로직 작성
      alert("검색을 선택하였습니다");
      window.location.href = '../search/search.html';
      
    });
  });


// 하단 고정 버튼(이전화면, 처음으로, 다음)
 // 이전화면 클릭시
 document.getElementById('prvsScren').addEventListener('click', function() {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('order', 'slow'); // 'order' 파라미터를 'slow' 값으로 설정
  // 기존 URL에 파라미터를 추가한 새 URL로 이동
  window.location.href = `../selecteat/selecteat.html?${urlParams}`;
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

// 수량 조절 버튼
const quantityControls = document.querySelectorAll('.quantity-control');

quantityControls.forEach(control => {
  const decreaseButton = control.querySelector('.decrease');
  const increaseButton = control.querySelector('.increase');
  const inputElement = control.querySelector('input');

  decreaseButton.addEventListener('click', () => {
    // 수량이 0 이상일 때만 감소
    if (parseInt(inputElement.value) > 0) {
      inputElement.value = parseInt(inputElement.value) - 1;
    }
  });

  increaseButton.addEventListener('click', () => {
    // 수량을 증가
    inputElement.value = parseInt(inputElement.value) + 1;
  });
});

//사이즈 이동
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
});ㄴ