// 1. HTML 요소들을 찾아서 변수에 저장
const nicknameInput = document.querySelector('#nickname');
const introCountTextarea = document.querySelector('#intro');
const nickCountResult = document.querySelector('#nickCount');
const introCountResult = document.querySelector('#introCount');

// 2. 닉네임 입력 필드의 실시간 글자수 카운트
nicknameInput.addEventListener('input', () => {
  const currentLength = document.querySelector('#nickname').value.length;
  const currentValue = document.querySelector('#nickname').value;
  const currentTag = document.querySelector('#nickname');

  console.log(currentTag);
  console.log(currentValue);
  console.log(currentLength);
  nickCountResult.textContent = currentLength;
});

introCountTextarea.addEventListener('input', () => {
  const currentLength = document.querySelector('#intro').value.length;
  console.log(currentLength);
  introCountResult.textContent = currentLength;
});

// 3. 자기소개 텍스트영역의 실시간 글자수 카운트
