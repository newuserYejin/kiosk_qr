var button = document.querySelector('.circle');
var colors = ['orange', 'pink'];
var currentIndex = 0;

button.addEventListener('click', function () {
  button.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length;
  alert("버튼이 클릭되었습니다!");
  window.location.href = '../detail_menu/jojo.html';
});

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


 // JavaScript
const list_content_box = document.querySelectorAll('.list_content_box');

list_content_box.forEach((divElement) => {
  divElement.addEventListener('click', function() {
    // 이벤트 처리 로직 작성
    console.log("클릭 이벤트가 발생했습니다.");
    alert("선택되었습니다");
  });
});
 
