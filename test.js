document.getElementById("openModalBtn").addEventListener("click", function() {
  // 모달창 열기
  document.getElementById("myModal").style.display = "block";

  // 3초 후에 모달창 자동으로 닫기
  setTimeout(function() {
    document.getElementById("myModal").style.display = "none";
  }, 3000);
});

// 닫기 버튼을 클릭하여 모달창 닫기
document.querySelector(".close").addEventListener("click", function() {
  document.getElementById("myModal").style.display = "none";
});
