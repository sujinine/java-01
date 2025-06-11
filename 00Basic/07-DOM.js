/* -------------------------------------------------------------------------- */
/*                                  1. DOM 선택자   (복습 did)                             */
/* -------------------------------------------------------------------------- */
// console.log(document.querySelector('.select'));
// document.querySelector('.select');

// const li = document.querySelector('.select li');
const lis = document.querySelectorAll('.select li');
// console.log(lis.length);
// console.log(lis[0]);

lis.forEach((item, index) => {
  console.log(item, index);
  item.style.border = '1px solid red';
  item.style.backgroundColor = 'yellow';

  // item.classList.add('active' + index + 1);
  // item.classList.add('active' + (index + 1));
  // item.classList.add(`active${index + 1}`);
});

/* -------------------------------------------------------------------------- */
/*                                2. DOM 클래스 제어      (복습 did)                         */
/* -------------------------------------------------------------------------- */
const tabsButton = document.querySelectorAll('.tabs button');

tabsButton.forEach((button) => {
  button.addEventListener('click', () => {
    // console.log('test');
    // button.classList.add('active');
    // button.classList.remove('active');
    // button.classList.toggle('active');

    tabsButton.forEach((btn) => {
      btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});

/* -------------------------------------------------------------------------- */
/*                                3. DOM 텍스트 제어      (복습 did)                           */
/* -------------------------------------------------------------------------- */
const textButton = document.querySelectorAll('.text-list button');

textButton.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const text = btn.textContent;
    // console.log(btn.textContent.length);
    // console.log(btn.textContent);
    btn.textContent = '수강완료!';
    btn.style.border = '2px solid blue';
    btn.style.color = 'blue';
    btn.previousElementSibling.previousElementSibling.style.borderBottom =
      '3px solid pink';
    // alert(text + '버튼틀 눌러 수강신청되었습니다.');
    console.log(btn.textContent);
    // alert(`${text}버튼틀 ${index + 1}번째를 눌러, 수강신청되었습니다.`);
    alert(`${text}버튼들 ${index + 1}번째를 눌러, 수강신청되었습니다.`);
    // console.log(btn.previousElementSibling.previousElementSibling);
    console.log(btn.closest('li').querySelector('.name').textContent); //이름만 출력한다.
  });
});

/* -------------------------------------------------------------------------- */
/*                                 4. DOM 속성 제어  (복습 중)                            */
/* -------------------------------------------------------------------------- */

const rating = document.querySelector('.ratings input');

// rating.setAttribute('disabled', 'true');
// const 변수명 = document.querySelector('선택자');
// const 변수명 = document.querySelectorAll('선택자');
// const 함수명 = () => {};
// 선택자.forEach((아이템명, 인덱스값) => {});

// const disabledButton = document.querySelector('.btn-disabled');
// const radios = document.querySelectorAll('.ratings input');

// disabledButton.addEventListener('click', () => {
//   radios.forEach((radio) => {
//     radio.setAttribute('disabled', 'true');
//   });
// });

//● 버튼 모두 비활성화
const disabledButton = document.querySelector('.btn-disabled');
const radioGroup = document.querySelectorAll('.ratings input');

disabledButton.addEventListener('click', () => {
  radioGroup.forEach((radio) => {
    radio.setAttribute('disabled', 'true');
  });
});

//● 비번 토글 pw -> text
const passwordButton = document.querySelector('.password button');
const passwordInput = document.querySelector('.password input');

// passwordButton.addEventListener('click', () => {
//   passwordInput.setAttribute('type', 'text');
//   // passwordButton.classList.add('active');
// });

//● 비번 토글 pw -> text -> pw
let toggle2 = true;
passwordButton.addEventListener('click', () => {
  if (toggle2) {
    passwordInput.setAttribute('type', 'password');
  } else {
    passwordInput.setAttribute('type', 'text');
  }
  toggle2 = !toggle2;
});

//● 버튼 상태 변경, change-name
const changeInput = document.querySelector('.change-name input');
const changeButton = document.querySelector('.change-name button');
console.log('input:', changeInput);
console.log('button:', changeButton);
console.log('change-name 요소:', document.querySelector('.change-name'));

let toggle = true;
changeButton.addEventListener('click', () => {
  if (toggle) {
    changeInput.removeAttribute('readonly');
  } else {
    changeInput.setAttribute('readonly', 'true');
  }
  toggle = !toggle;
});

// const changeInput = document.querySelector('.change-name input');
// const changeButton = document.querySelector('.change-name button');

// changeButton.addEventListener('click', () => {
//   changeInput.removeAttribute('readonly');
// });

// let toggle = true;
// changeButton.addEventListener('click', () => {
//   if (toggle) {
//     changeInput.removeAttribute('readonly');
//   } else {
//     changeInput.setAttribute('readonly', 'true');
//   }
//   toggle = !toggle;
// });

//● 첨부화일 이미지 속성 값 노출
const image = document.querySelector('.header img');
const imageSrc = image.getAttribute('src');
const imageAlt = image.hasAttribute('alt');
console.log(imageSrc);
console.log(imageAlt);

//● 선택한 점수 확인
const ratingsButton = document.querySelector('.btn-check-count');
const ratingsList = document.querySelectorAll('.ratings input');

ratingsButton.addEventListener('click', () => {
  let isValid = false; //클릭이 안된 것을 초기값으로 저장한다는 의미,
  // 초기값: "아무것도 선택 안됨" 상태

  ratingsList.forEach((input) => {
    // console.log(rating.checked);
    if (input.checked) {
      console.log(input.value);
      isValid = true; // 4️⃣ "선택됨" 상태로 변경
    }
  });

  if (!isValid) {
    // 1번:"선택 안됨이 맞다"면...2번:"선택 안됨이 아니다"
    console.log('선택하세요.');
  }
});

//   console.log(rating.value);
// ● 첨부화일 하단 밑에 정보
//1.입력받기
const addFile = document.querySelector('.file');
//2.출력하기
const addFileName = document.querySelector('.filename');
const addFileSize = document.querySelector('.filesize');

addFile.addEventListener('change', (e) => {
  const filename = e.target.files[0].name;
  const filesize = e.target.files[0].size;
  const result = filesize / 1024;

  // console.log(filesize / 1024);
  console.log(result);

  addFileName.textContent = `파일명 : ${filename}`;
  addFileSize.textContent = `파일크기 : ${result.toFixed(2)}kb`;
  //   console.log(new Date(e.target.files[0].lastModified));
});

//● 다이얼로그, dialog, 팝업창 띄우기
const openPopup = document.querySelector('.btn-avatar'); //1.오픈할 대상
const popup = document.querySelector('.dialog'); //2.뒤에 일어나는 액션
const closePopup = document.querySelector('.dialog .close');

openPopup.addEventListener('click', () => {
  //   popup.show(); //모달이 없는 상태
  popup.showModal();
  //모달이 있는 상태
});

closePopup.addEventListener('click', () => {
  popup.close();
});

/* -------------------------------------------------------------------------- */
/*                                 DOM CSS 제어                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   5.DOM 탐색                                  */
/* -------------------------------------------------------------------------- */

const routineButton = document.querySelectorAll('.routine-list button');
routineButton.forEach((button) => {
  button.addEventListener('click', () => {
    // button.nextElementSibling.style.display = 'block';
    // button.parentElement.classList.add('active');
    routineButton.forEach((btn) => {
      btn.parentElement.classList.remove('active');
      //1.모두 지운다.
    });
    button.parentElement.classList.add('active');
    //2.클릭한것만 active 처리한다.
  });
});

const items = document.querySelectorAll('.routine-list > li');
items.forEach((item) => {
  const depth = item.querySelector('.detail-list'); //item안에 뎁스가 존재하는가?
  console.log(item.contains(depth));

  //false만 골라낸다.
  if (!item.contains(depth)) {
    const button = item.querySelector('button');
    button.setAttribute('role', 'link');

    button.addEventListener('click', () => {
      window.location.href = 'https://www.dbcut.com';
    });
  }
});

/* -------------------------------------------------------------------------- */
/*                                   DOM 삽입                                  */
/* -------------------------------------------------------------------------- */
