// 폼과 팝업 요소들 선택
const form = document.querySelector('form');
const popup = document.querySelector('.popup');
const popupMessage = document.getElementById('popup-message');
const closeButton = document.querySelector('.popup button');
const idInput = document.querySelector('#txt1_1');

//1.’확인’버튼을 누르면 ‘레이어팝업’ 띄우기 : xxx님이 로그인 하셧습니다.
// 로그인 폼 제출 이벤트 처리
form.addEventListener('submit', function (e) {
  e.preventDefault(); // 기본 폼 제출 동작 방지

  // 이메일과 비밀번호 입력값 가져오기
  const email = idInput.value.trim();
  const password = document.querySelector('#txt1_2').value.trim();

  // 이메일과 비밀번호가 모두 입력되었는지 확인
  if (email && password) {

   // 1.’확인’버튼을 누르면 ‘레이어팝업’ 띄우기, (팝업 메시지 설정)
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

// 2.지우기 작업
