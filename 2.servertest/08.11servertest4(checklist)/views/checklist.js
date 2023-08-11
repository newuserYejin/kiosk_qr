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
    window.location.href = "../BigFrame/BigOrder.html"
  } else if(order_info == 'basic'){
    window.location.href = "../BasicFrame/BasicOrder.html"
  }
}
