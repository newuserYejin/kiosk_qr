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

const urlParams = new URLSearchParams(window.location.search);
const orderType = urlParams.get('order');

function openSelect() {

    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = '../BigFrame/BigOrder.html?order=slow';
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = '../BasicFrame/BasicOrder.html?order=basic';
    } else {
        location.href = '../selectorder/selectorder.html';
    }


}
function openCheck() {
    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = '../last_checklist/checklist.html?order=slow';
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = '../last_checklist/checklist.html?order=basic';
    } else {
        location.href = '../selectorder/selectorder.html';
    }

}
function openPay() {
    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = '../paymethod/paymethod.html?order=slow';
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = '../paymethod/paymethod.html?order=basic';
    } else {
        location.href = '../selectorder/selectorder.html';
    }

}

function back() {
    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = '../paymethod/paymethod.html?order=slow';
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = '../paymethod/paymethod.html?order=basic';
    } else {
        location.href = '../selectorder/selectorder.html';
    }

}
function gohome() {
    if (orderType === 'slow') {
        // 천천히 주문하기 버튼을 클릭한 경우
        location.href = '../BigFrame/BigOrder.html?order=slow';
    } else if (orderType === 'basic') {
        // 기본 주문하기 버튼을 클릭한 경우
        location.href = '../BasicFrame/BasicOrder.html?order=basic';
    } else {
        location.href = '../selectorder/selectorder.html';
    }

}