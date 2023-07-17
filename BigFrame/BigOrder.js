function move(){
  alert('이동합니다');
  const circle =document.getElementById('circle');
  circle.style.backgroundColor="red";
};

var quantityElement = document.getElementById('quantity');
var quantity = 0;

function decreaseQuantity() {
  if (quantity > 1) {
    quantity--;
    updateQuantity();
  }
}

function increaseQuantity() {
  quantity++;
  updateQuantity();
}

function updateQuantity() {
  quantityElement.textContent = quantity;
}

const firstBtn = document.getElementById('first');
const afterBtn = document.getElementById('after');
const nextBtn = document.getElementById('next');

//처음으로 버튼 이벤트
firstBtn.onclick= function(){

}

//이전화면 버튼 이벤트
afterBtn.onclick = function(){

}

// 다음 버튼 이벤트
nextBtn.onclick = function(){

}

// 도움말 이미지 클릭시 이벤트
const help = document.getElementById('help');

help.onclick = function(){
  
}

//기본 더크게 라디오 이벤트
function handleRadioClick() {
  var selectedValue = document.querySelector('input[name="size"]:checked').value;
  
  if (selectedValue === 'big') {
    window.location.href = 'BigOrder.html'; // 이동할 페이지의 URL을 지정합니다.
  } else if (selectedValue === 'basic') {
    window.location.href = 'BasicOrder.html';
  } 
}