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
const selectBtn = document.querySelector('.selectBtn');
selectBtn.onclick = function(){
  alert("선택되었습니다");
};
// 검색버튼
const search= document.querySelectorAll('.search');
search.forEach((divElement) => {
    divElement.addEventListener('click', function() {
      // 이벤트 처리 로직 작성
      alert("검색을 선택하였습니다");
      window.location.href = '../detail_menu/search.html';
      
    });
  });

  const fix_button = document.querySelectorAll('.fix_button');
  fix_button.forEach((divElement) => {
    divElement.addEventListener('click', function() {
      // 이벤트 처리 로직 작성
      alert("선택하였습니다");
      window.location.href = '../detail_menu/search.html';
      
    });
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