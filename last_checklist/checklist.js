// script.js

var button = document.querySelector('.circle');

document.addEventListener("DOMContentLoaded", function () {
  var decrementButton = document.getElementById("decrement");
  var incrementButton = document.getElementById("increment");
  var quantityInput = document.getElementById("quantity");

  decrementButton.addEventListener("click", function () {
    var currentQuantity = parseInt(quantityInput.value);
    if (currentQuantity > 1) {
      quantityInput.value = currentQuantity - 1;
    }
  });

  incrementButton.addEventListener("click", function () {
    var currentQuantity = parseInt(quantityInput.value);
    quantityInput.value = currentQuantity + 1;
  });
});

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
