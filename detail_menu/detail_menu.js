// 페이지 로딩 후 모달 창을 자동으로 표시합니다.
document.addEventListener("DOMContentLoaded", function () {
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
});

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