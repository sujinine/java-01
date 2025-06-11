// const theButton = document.querySelector('.btn-white-a');
// theButton.addEventListener('click', (e) => {
//   e.preventDefault();
//   //   console.log('test');
//   alert('xxx님을 추천하셨습니다');
// });

const referIdButton = document.querySelector('.btn-white-a');
// console.log('#referIDInput');

referIdButton.addEventListener('click', (e) => {
  e.preventDefault();
  // alert('OO님을 추천하셨습니다.');
  const referIDInput = document.querySelector('#txt7_2_1');
  console.log(referIDInput);
  // const referIDValue = referIDInput.value.trim();

  const referIdValue = document.querySelector('#txt7_2_1').value.trim();
  console.log(referIdValue);

  if (referIdValue === '') {
    alert('추천인 아이디를 입력해주세요.');
  } else {
    alert(`${referIdValue}님을 추천하셨습니다.`);
  }
});

/* 이메일 선택/직접입력 */
//1.값이 들어오는 변수
const domainInput = document.querySelector('.domain');
//2.값이 출력되는 변수
const domainSelect = document.querySelector('.email select');
// const domainInputHTML = document.querySelector('.domain').outerHTML;
// const domainSelectHTML = document.querySelector('.email select').outerHTML;

//체크목적 1번
// console.log('domainInput:', domainInput);
// console.log('domainSelect ->:', domainSelect);
// console.log('domainSelectHTML ->:', domainSelectHTML);
// console.log(domainInput);
// console.log(domainInputHTML);
// console.log('.email select 결과:',domainSelect);

// console.log(domainInput.outerHTML);
// console.log(domainSelect.outerHTML);

//3.초기 진입시 미리 선택된 이메일 주소 노출
const innitialSelectedValue = domainSelect.value;
domainInput.value = innitialSelectedValue; // input의 값도 초기 선택된 값으로 설정

// console.log('초기 선택된 값:', innitialSelectedValue); // 초기 선택된 값 출력

///체크목적 2번
console.log('타입:', typeof domainInput); // "object"
console.log('요소 객체:', domainInput); // DOM 요소 객체
console.log('HTML 문자열:', domainInput.outerHTML); // HTML 문자열
console.log('입력된 이메일:', domainInput.value); // input의 현재 값
console.log('클래스:', domainInput.className); // "domain"
// console.log('직접입력된 값:', domainInput.value); // 직접입력

// 4.select 변경 이벤트
domainSelect.addEventListener('change', () => {
  const selectedValue = domainSelect.value;
  console.log('선택된 값:', selectedValue);

  if (selectedValue === '') {
    console.log('>>> 직접입력 모드로 변경됨');
    domainInput.value = '';
    domainInput.removeAttribute('readonly');
  } else {
    console.log('>>> 미리 정의된 도메인 선택:', selectedValue);
    domainInput.value = selectedValue;
    domainInput.setAttribute('readonly', 'true');
  }
});

// 5.직접입력 시 실시간 값 추적
domainInput.addEventListener("input",()=>{
  console.log('입력된 이메일:', domainInput.value);  
})

