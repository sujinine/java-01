//1번 방식
const btnReset = document.querySelector('.btn-group .btn-reset');
const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

//새로 작성
btnReset.addEventListener('click', (e) => {
  e.preventDefault();

  allCheckboxes.forEach((checkbox) => {
    if (checkbox.hasAttribute('checked')) {
      checkbox.removeAttribute('checked');
    } else {
      checkbox.checked = false;
    }
  });
});

//2번 방식
// const btnReset = document.querySelector('.btn-group .btn-reset');
// const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

// //새로 작성
// btnReset.addEventListener('click', (e) => {
//   e.preventDefault();

//   allCheckboxes.forEach((checkbox) => {
//     checkbox.removeAttribute('checked');
//     checkbox.checked = false;
//   });
// });
