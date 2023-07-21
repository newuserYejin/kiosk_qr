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