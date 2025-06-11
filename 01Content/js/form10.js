// 등록 버튼과 라디오 버튼들 찾기
const submitButton = document.querySelector('.btn-submit');
const radioButtons = document.querySelectorAll('input[name="rag1"]');

submitButton.addEventListener('click', (e) => {
  //
  e.preventDefault();

  // 선택된 라디오 버튼 찾기
  let selectedText = null;

  radioButtons.forEach((radio, index) => {
    if (radio.checked) {
      //   const label = document.querySelector('label for=ra2_1');//틀림!
      //   const label = document.querySelector('label[for=ra2_1]');//작동
      const label = document.querySelector(`label[for=ra2_${index + 1}]`);
      selectedText = label.textContent;
    }
  });

  // 결과 표시
  if (selectedText) {
    alert(`${selectedText}이 선택되었습니다.`);
  } else {
    alert('분류를 선택하세요.');
  }
});
