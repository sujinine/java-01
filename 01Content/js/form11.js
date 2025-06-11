//1.뉴스레터 구독
//1.입력받는 코너
const emailGetBox = document.querySelector('#emailGet');
//2.실행하는 버튼
const gudokApplyBtn = document.querySelector('.gudokApply');

gudokApplyBtn.addEventListener('click', (e) => {
  //
  e.preventDefault();

  const emailValue = emailGetBox.value.trim();
  console.log(emailValue);

  if (emailValue) {
    alert(`${emailValue}으로 뉴스레터가 신청되었습니다.`);
  } else {
    alert("'이메일'을 입력해주세요.");
  }
});

//2.쿠폰 코드 입력
const couponCodeBox = document.querySelector('#couponGet');
const codeAlppyBtn = document.querySelector('.code-apply');

codeAlppyBtn.addEventListener('click', () => {
  const codeValue = couponCodeBox.value.trim();
  console.log(codeValue);

  if (codeValue) {
    alert(`${codeValue}으로 쿠폰코드를 입력하셨습니다.`);
  } else {
    alert("'쿠폰코드'를 입력해주세요.");
  }
});
