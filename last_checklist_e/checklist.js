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

// 하단 고정 버튼(이전화면, 처음으로, 다음)
// 이전화면 클릭시
document.getElementById('prvsScren').addEventListener('click', function () {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set('order', 'basic'); // 'order' 파라미터를 'slow' 값으로 설정
  // 기존 URL에 파라미터를 추가한 새 URL로 이동
   if (orderType === 'slow') {
           // 천천히 주문하기 버튼을 클릭한 경우
           location.href = '../BigFrame_e/BigOrder_e.html?order=slow';
       } else if (orderType === 'basic') {
           // 기본 주문하기 버튼을 클릭한 경우
           location.href = '../BasicFrame_e/BasicOrder_e.html?order=basic';
       } else {
           location.href = '../selectorder/selectorder.html';
       }
       alert("The button has been clicked!")
});

// 처음으로
document.getElementById("firstScreen").addEventListener("click", function () {
  // 새로운 페이지로 이동
  window.location.href = "../selectorder_e/selectorder_e.html";
});

// 다음
document.getElementById("nextScreen").addEventListener("click", function () {
  // URL에서 "order" 파라미터 값을 확인하여 다른 페이지로 이동
  const urlParams = new URLSearchParams(window.location.search);
  const orderType = urlParams.get('order');

  if (orderType === 'slow') {
      // 천천히 주문하기 버튼을 클릭한 경우
      location.href = '../paymethod_e/paymethod_e.html?order=slow';
  } else if (orderType === 'basic') {
      // 기본 주문하기 버튼을 클릭한 경우
      location.href = '../paymethod_e/paymethod_e.html?order=basic';
  } else {
      location.href = '../selectorder/selectorder.html';
  }
  
});
  
   // URL에서 "order" 파라미터 값을 확인하여 다른 페이지로 이동
   const urlParams = new URLSearchParams(window.location.search);
   const orderType = urlParams.get('order');
   function openSelect() {
   
       if (orderType === 'slow') {
           // 천천히 주문하기 버튼을 클릭한 경우
           location.href = '../BigFrame_e/BigOrder_e.html?order=slow';
       } else if (orderType === 'basic') {
           // 기본 주문하기 버튼을 클릭한 경우
           location.href = '../BasicFrame_e/BasicOrder_e.html?order=basic';
       } else {
           location.href = '../selectorder/selectorder.html';
       }
       alert("The button has been clicked!")

   }
   function openCheck() {
       if (orderType === 'slow') {
       // 천천히 주문하기 버튼을 클릭한 경우
       location.href = '../last_checklist_e/checklist_e.html?order=slow';
       } else if (orderType === 'basic') {
       // 기본 주문하기 버튼을 클릭한 경우
       location.href = '../last_checklist_e/checklist_e.html?order=basic';
       } else {
       location.href = '../selectorder/selectorder.html';
       }

       alert("The button has been clicked!")
   }
   function openPay() {
       if (orderType === 'slow') {
       // 천천히 주문하기 버튼을 클릭한 경우
       location.href = '../paymethod_e/paymethod_e.html?order=slow';
       } else if (orderType === 'basic') {
       // 기본 주문하기 버튼을 클릭한 경우
       location.href = '../paymethod_e/paymethod_e.html?order=basic';
       } else {
       location.href = '../selectorder/selectorder.html';
       }

       alert("The button has been clicked!")
   }

   const joImage = document.getElementById("imageLink");

   joImage.addEventListener("click", function () {
       $.get("../help_msg/help_msg.html", function (data) {
           $("#modalContainer").html(data);
           const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
           modal.show();
       });
   });

// 모달 수정 예정 알아보고
  const modifybtn = document.getElementById("modify");
  modifybtn.addEventListener('click', function () {
    $.get("../detail_menu/jojo.html", function (data) {
      $("#modalContainer").html(data);
      const modal = new bootstrap.Modal(document.getElementById("exampleModalCenter"));
      modal.show();
    });
  });

const deleteBtn=document.getElementById('delete');
deleteBtn.addEventListener("click",function(){
  $.get("../messagebox/caution_msg.html", function (data) {
    $("#modalContainer").html(data);
    const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
    modal.show();
  });
});

  
  