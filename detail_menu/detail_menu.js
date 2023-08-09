// 페이지 로딩 후 모달 창을 자동으로 표시합니다.
document.addEventListener("DOMContentLoaded", function () {
  const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
  modal.show();
});

$(document).ready(function () {
  $(".input-group").on("click", "#increment", function () {
    // .input-group 클래스를 가진 요소 내에서 #increment 버튼을 클릭했을 때 실행되는 함수
    var input = $(this).closest(".input-group").find("input");
    // 클릭한 버튼이 속한 .input-group 내에서 input 요소를 찾음
    input.val(parseInt(input.val()) + 1);
  });

  $(".input-group").on("click", "#decrement", function () {
    var input = $(this).closest(".input-group").find("input");
    if (parseInt(input.val()) > 1) {
      input.val(parseInt(input.val()) - 1);
    }
  });
});

// (function(){
//   document.addEventListener("DOMContentLoaded", function () {
//     var decrementButton = document.getElementById("decrement");
//     var incrementButton = document.getElementById("increment");
//     var quantityInput = document.getElementById("input_value");

//     decrementButton.addEventListener("click", function () {
//       var currentQuantity = parseInt(quantityInput.value);
//       if (currentQuantity > 1) {
//         quantityInput.value = currentQuantity - 1;
//         // 변경된 값을 화면에 표시
//       }
//       console.log(quantityInput.value);
//     });

//     incrementButton.addEventListener("click", function () {
//       var currentQuantity = parseInt(quantityInput.value);
//       quantityInput.value = currentQuantity + 1;
//       // 변경된 값을 화면에 표시
//       quantityInput.dispatchEvent(new Event("input")); // 변경 이벤트 발생
//     });
//   });
// })();

