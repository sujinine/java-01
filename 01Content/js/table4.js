// 1. 오픈할 대상 (버튼들)
const openButtons = document.querySelectorAll('.btn-info'); // 복수형으로 변경

// 2. 뒤에 일어나는 액션 (팝업들)
const popups = document.querySelectorAll('.popup'); // 복수형으로 변경

// 3. 닫기 버튼들
const closeButtons = document.querySelectorAll('.btn-close'); // 올바른 클래스명

openButtons.forEach((button, index) => {
  //
  button.addEventListener('click', (e) => {
    e.preventDefault();

    //해당 팝업 열기, 해당 인덱스의 요소가 실제로 존재하는지 확인
    if (popups[index]) {
      popups[index].showModal();
    }
  });
});

closeButtons.forEach((button, index) => {
  //
  button.addEventListener('click', (e) => {
    e.preventDefault();

    //해당 인덱스의 요소가 실제로 존재하는지 확인
    if (popups[index]) {
      popups[index].close();
    }
  });
});

//AI도움

// closeButtons.forEach((button, index) => {
//   //
//   button.addEventListener('click', () => {
//     const popup = button.closest('.popup');
//     if (popup) {
//       popup.close();
//     }
//   });
// });
