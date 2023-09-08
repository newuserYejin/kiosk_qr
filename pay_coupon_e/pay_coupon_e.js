//도움말 버튼
const joImage = document.getElementById("imageLink");

joImage.addEventListener("click", function () {
    // 먼저 모달 컨테이너를 비웁니다.
    document.getElementById("modalContainer_e").innerHTML = "";

    // detail_menu.css를 제거합니다.
    const detailMenuLink = document.querySelector('link[href="http://localhost:3001/detail_menu_e/detail_menu_e.css"]');
    if (detailMenuLink) {
        detailMenuLink.remove();
    }

    // help_msg.html 콘텐츠를 로드하여 모달 컨테이너에 추가합니다.
    fetch("http://localhost:3001/help_msg/help_msg.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP Error " + response.status);
            }
            return response.text();
        })
        .then(data => {
            // 모달 컨테이너에 help_msg.html 콘텐츠를 추가합니다.
            $("#modalContainer_e").html(data);

            // help_msg.css 파일을 로드합니다.
            const linkElement = document.createElement("link");
            linkElement.rel = "stylesheet";
            linkElement.type = "text/css";
            linkElement.href = "http://localhost:3001/help_msg/help_msg.css";
            document.head.appendChild(linkElement);

            const modal = new bootstrap.Modal(document.getElementById("exampleModal"));
            modal.show();
        })
        .catch(error => {
            console.error("콘텐츠를 가져오는 중 오류가 발생했습니다:", error);
        });
});

const urlParams = new URLSearchParams(window.location.search);
const orderType = urlParams.get('order');

function openSelect() {
    const pickup = urlParams.get('pickup');

    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = `http://localhost:3001/BigFrame_e/BigOrder_e.html?order=slow&pickup=${pickup}`;
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = `http://localhost:3001/BasicFrame_e/BasicOrder_e.html?order=basic&pickup=${pickup}`;
    } else {
        location.href = 'http://localhost:3001/selectorder/selectorder.html';
    }


}
function openCheck() {
    const pickup = urlParams.get('pickup');

    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = `http://localhost:3001/last_checklist_e/checklist_e.html?order=slow&pickup=${pickup}`;
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = `http://localhost:3001/last_checklist_e/checklist_e.html?order=basic&pickup=${pickup}`;
    } else {
        location.href = 'http://localhost:3001/selectorder_e/selectorder_e.html';
    }

}
function openPay() {
    const pickup = urlParams.get('pickup');

    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = `http://localhost:3001/paymethod_e/paymethod_e.html?order=slow&pickup=${pickup}`;
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = `http://localhost:3001/paymethod_e/paymethod_e.html?order=basic&pickup=${pickup}`;
    } else {
        location.href = 'http://localhost:3001/selectorder/selectorder.html';
    }

}

function back() {
    const pickup = urlParams.get('pickup');

    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = `http://localhost:3001/paymethod_e/paymethod_e.html?order=slow&pickup=${pickup}`;
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = `http://localhost:3001/paymethod_e/paymethod_e.html?order=basic&pickup=${pickup}`;
    } else {
        location.href = 'http://localhost:3001/selectorder/selectorder.html';
    }

}
function gohome() {
    const pickup = urlParams.get('pickup');

    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = `http://localhost:3001/BigFrame_e/BigOrder_e.html?order=slow&pickup=${pickup}`;
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = `http://localhost:3001/BasicFrame_e/BasicOrder_e.html?order=basic&pickup=${pickup}`;
    } else {
        location.href = 'http://localhost:3001/selectorder/selectorder.html';
    }

}

// function showMessageAndRedirect() {
//     setTimeout(function() {
//         alert("3초 후에 페이지가 이동됩니다.");
    
//         // 알림 메시지가 나타난 후 3초 뒤에 페이지를 
//         setTimeout(function() {
//           window.location.href = "http://localhost:3001/ordernum/ordernum.html?order=basic";
//         }, 3000); 
//       }, 2000); 
//     }
    
// // 페이지 로드 시 함수 호출
// window.onload = showMessageAndRedirect;