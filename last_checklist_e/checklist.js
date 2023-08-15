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

  //도움말 버튼
const joImage = document.getElementById("imageLink");

joImage.addEventListener("click", function () {
  // 먼저 모달 컨테이너를 비웁니다.
  document.getElementById("modalContainer").innerHTML = "";

  // detail_menu.css를 제거합니다.
  const detailMenuLink = document.querySelector('link[href="../detail_menu/detail_menu.css"]');
  if (detailMenuLink) {
    detailMenuLink.remove();
  }
  
  const deleteLink = document.querySelector('link[href="../messagebox/caution_msg.css"]');
  if(deleteLink){
    deleteLink.remove();
  }

  // help_msg.html 콘텐츠를 로드하여 모달 컨테이너에 추가합니다.
  fetch("../help_msg/help_msg.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("HTTP Error " + response.status);
      }
      return response.text();
    })
    .then(data => {
      // 모달 컨테이너에 help_msg.html 콘텐츠를 추가합니다.
      $("#modalContainer").html(data);

      // help_msg.css 파일을 로드합니다.
      const linkElement = document.createElement("link");
      linkElement.rel = "stylesheet";
      linkElement.type = "text/css";
      linkElement.href = "../help_msg/help_msg.css";
      document.head.appendChild(linkElement);

      

      const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
      modal.show();
    })
    .catch(error => {
      console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
    });
});



const modifybtn = document.querySelectorAll(".modify");
modifybtn .forEach(button => {
  button.addEventListener("click", function () {
    // 버튼이 클릭되었을 때 실행되는 코드

    // 먼저 모달 컨테이너를 비웁니다.
    document.getElementById("modalContainer").innerHTML = "";

    // help_msg.css를 제거합니다.
    const detailMenuLink = document.querySelector('link[href="../help_msg/help_msg.css"]');
    if (detailMenuLink) {
      detailMenuLink.remove();
    }

    const modifyLink = document.querySelector('link[href="../messagebox/caution_msg.css');
    if(modifyLink){
      modifyLink.remove();
    }

    // 외부 detail_menu 폴더에 있는 jojo.html 파일을 로드하여 모달 컨테이너에 추가합니다.
    fetch("../detail_menu/jojo.html") // 이 부분의 파일 경로를 수정해야합니다.
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP Error " + response.status);
        }
        return response.text();
      })
      .then(data => {
        // 모달 컨테이너에 jojo.html 콘텐츠를 추가합니다.
        $("#modalContainer").html(data);

        // 외부 detail_menu 폴더에 있는 detail_menu.css 파일을 로드합니다.
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "../detail_menu/detail_menu.css"; // 이 부분의 파일 경로를 수정해야합니다.
        document.head.appendChild(linkElement);

        // 외부 detail_menu 폴더에 있는 detail_menu.js 파일을 로드합니다.
        const scriptElement = document.createElement("script");
        scriptElement.src = "../detail_menu/detail_menu.js"; // 이 부분의 파일 경로를 수정해야합니다.
        document.body.appendChild(scriptElement);

        const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();
      })
      .catch(error => {
        console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
      });
  });
});

const deletebtn = document.querySelectorAll(".delete");
deletebtn.forEach(button => {
  button.addEventListener("click", function () {
    // 버튼이 클릭되었을 때 실행되는 코드

    // 먼저 모달 컨테이너를 비웁니다.
    document.getElementById("modalContainer").innerHTML = "";

    // help_msg.css를 제거합니다.
    const detailMenuLink = document.querySelector('link[href="../help_msg/help_msg.css"]');
    if (detailMenuLink) {
      detailMenuLink.remove();
    }

    const modifyLink = document.querySelector('link[href="../detail_menu/detail_menu.css');
    if(modifyLink){
      modifyLink.remove();
    }

    // 외부 detail_menu 폴더에 있는 jojo.html 파일을 로드하여 모달 컨테이너에 추가합니다.
    fetch("../messagebox/caution_msg.html") // 이 부분의 파일 경로를 수정해야합니다.
      .then(response => {
        if (!response.ok) {
          throw new Error("HTTP Error " + response.status);
        }
        return response.text();
      })
      .then(data => {
        // 모달 컨테이너에 jojo.html 콘텐츠를 추가합니다.
        $("#modalContainer").html(data);

        // 외부 detail_menu 폴더에 있는 detail_menu.css 파일을 로드합니다.
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = "text/css";
        linkElement.href = "../messagebox/caution_msg.css"; // 이 부분의 파일 경로를 수정해야합니다.
        document.head.appendChild(linkElement);

        // 외부 detail_menu 폴더에 있는 detail_menu.js 파일을 로드합니다.
        const scriptElement = document.createElement("script");
        scriptElement.src = "../messagebox/caution_msg.js"; // 이 부분의 파일 경로를 수정해야합니다.
        document.body.appendChild(scriptElement);

        const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
        modal.show();
      })
      .catch(error => {
        console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
      });
  });
});


  

