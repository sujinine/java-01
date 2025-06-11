// // 방법 1: CSS 클래스 'checked'를 사용하는 방법
// const checkBoxGroup = document.querySelectorAll('.check-list input');
// const checkBoxAll = document.querySelector('.check-list .all');

// checkBoxAll.addEventListener('click', () => {
//   // 전체 체크박스에 'checked' 클래스가 있는지 확인
//   if (checkBoxAll.classList.contains('checked')) {
//     // 있으면 모든 체크박스에서 'checked' 클래스 제거
//     checkBoxGroup.forEach((eachInput) => {
//       eachInput.classList.remove('checked');
//     });
//   } else {
//     // 없으면 모든 체크박스에 'checked' 클래스 추가
//     checkBoxGroup.forEach((eachInput) => {
//       eachInput.classList.add('checked');
//     });
//   }
// });

//● 채용구분 그룹 처리, 전체 체크박스 모두 키고 끄고
const checkBoxAll1 = document.querySelector('.check-list1 .all');
const checkBoxGroup1 = document.querySelectorAll('.check-list1 input');

checkBoxAll1.addEventListener('click', () => {
  //
  if (checkBoxAll1.hasAttribute('checked')) {
    checkBoxGroup1.forEach((eachInput) => {
      eachInput.removeAttribute('checked');
    });
  } else {
    //
    checkBoxGroup1.forEach((eachInput) => {
      eachInput.setAttribute('checked', 'checked');
    });
  }
});

//● check box 키고 끄고
const checkBoxAll2 = document.querySelector('.check-list2 .all');
const checkBoxGroup2 = document.querySelectorAll('.check-list2 input');

checkBoxAll2.addEventListener('click', () => {
  //
  if (checkBoxAll2.hasAttribute('checked')) {
    checkBoxGroup2.forEach((eachInput) => {
      eachInput.removeAttribute('checked');
    });
  } else {
    //
    checkBoxGroup2.forEach((eachInput) => {
      eachInput.setAttribute('checked', 'checked');
    });
  }
});
