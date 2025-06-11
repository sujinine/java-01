// 폼과 팝업 요소들 선택
const form = document.querySelector('form');
const popup = document.querySelector('.popup');
const popupMessage = document.getElementById('popup-message');
const closeButton = document.querySelector('.popup button');
const idInput = document.querySelector('#txt1_1');

// 로그인 폼 제출 이벤트 처리
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 기본 폼 제출 동작 방지

  // 이메일과 비밀번호 입력값 가져오기
  const email = idInput.value.trim();
  const password = document.querySelector('#txt1_2').value.trim();

  // 이메일과 비밀번호가 모두 입력되었는지 확인
  if (email && password) {

   // 1.'확인'버튼을 누르면 '레이어팝업' 띄우기, (팝업 메시지 설정)
    popupMessage.textContent = `${email}님이 로그인 하셨습니다.`;

    // 팝업 열기
    popup.showModal();
  } else {
    // 필수 정보가 입력되지 않은 경우
    if (!email && !password) {
      popupMessage.textContent = '이메일과 비밀번호를 입력해주세요.';
    } else if (!email) {
      popupMessage.textContent = '이메일을 입력해주세요.';
    } else if (!password) {
      popupMessage.textContent = '비밀번호를 입력해주세요.';
    }
    popup.showModal();
  }
});

// 팝업 닫기 버튼 이벤트
closeButton.addEventListener('click', function () {
  popup.close();
});

// 팝업 외부 클릭시 닫기 (선택사항)
popup.addEventListener('click', function (e) {
  if (e.target === popup) {
    popup.close();
  }
});

// 지우기 작업
// 삭제 버튼 기능 (입력 필드 비우기)
const deleteButtons = document.querySelectorAll('.btn-del');
const inputs = document.querySelectorAll('input');

// 초기 상태: 모든 X버튼 숨기기
deleteButtons.forEach((button) => {
  button.style.display = 'none';
});

// 각 input에 입력 이벤트 추가
inputs.forEach((input, index) => {
  const deleteButton = deleteButtons[index];

  // input에 값 입력할 때마다 체크
  input.addEventListener('input', (e) => {
    if (input.value.length > 0) {
      deleteButton.style.display = 'block'; // X버튼 보이기
    } else {
      deleteButton.style.display = 'none'; // X버튼 숨기기
    }
  });

  // [수정] 포커스 받을 때 값이 있으면 X버튼 보이기 - focus 이벤트 추가
  input.addEventListener('focus', (e) => {
    if (input.value.length > 0) {
      deleteButton.style.display = 'block';
    }
  });

  // [수정] 포커스를 잃을 때 X버튼 숨기기 - change 이벤트를 blur로 변경하고 setTimeout 추가
  input.addEventListener('blur', (e) => {
    // setTimeout을 사용해서 X버튼 클릭이 처리된 후에 숨기기
    setTimeout(() => {
      deleteButton.style.display = 'none';
    }, 150);
  });
});

// X버튼 클릭시 input 비우고 X버튼 숨기기
deleteButtons.forEach((button, index) => {
  button.addEventListener('click', (e) => {
    const input = inputs[index];
    input.value = '';
    input.focus();
    button.style.display = 'none'; // X버튼 숨기기
  });
});