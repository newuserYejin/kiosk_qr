const modal = document.querySelector(".self_modal"); // 클래스 선택자 수정
const openModalBtn = document.getElementById("self_modal_open");
const closeModalBtn = document.querySelector(".self_modal_ok");

// 모달창 열기
openModalBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// 모달창 닫기
closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});


