// 1.제목 입력 필드 찾기, 학습용
// const inputText = document.querySelector('#txt2_1');

// inputText.addEventListener('input', () => {
//   console.log(inputText.value.length);
// });

// 2.등록 버튼과 라디오 버튼들 찾기
const submitButton = document.querySelector('.btn-submit');
const radioButtons = document.querySelectorAll('input[name="rag1"]');

// 입력 필드들 찾기
const titleInput = document.querySelector('#txt2_1');

// 실시간 글자 수 체크 (힌트 활용)
titleInput.addEventListener('input', () => {
  console.log('제목 글자 수:', titleInput.value.length);
});

// 등록 버튼 클릭 시 유효성 검사
submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  // 1. 라디오 버튼 선택 확인
  let selectedText = null;
  radioButtons.forEach((radio, index) => {
    if (radio.checked) {
      const label = document.querySelector(`label[for=ra2_${index + 1}]`);
      selectedText = label.textContent;
    }
  });

  // 2. 모든 조건 만족 시 - 라디오 버튼 값만 표시
  alert(`선택된 분류: ${selectedText}`);
});
