document.addEventListener("DOMContentLoaded", function() {
    var decrementButton = document.getElementById("decrement");
    var incrementButton = document.getElementById("increment");
    var quantityInput = document.getElementById("quantity");
  
    decrementButton.addEventListener("click", function() {
      var currentQuantity = parseInt(quantityInput.value);
      if (currentQuantity > 1) {
        quantityInput.value = currentQuantity - 1;
      }
    });
  
    incrementButton.addEventListener("click", function() {
      var currentQuantity = parseInt(quantityInput.value);
      quantityInput.value = currentQuantity + 1;
    });
  });