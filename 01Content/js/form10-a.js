//● 알림창
//1.입력필드 찾기
const inputText = document.querySelector('#txt2_1');

inputText.addEventListener('input', () => {
  //   console.log(inputText.value.length);
  //   console.log('제목 글자 수:', inputText.value.length);
  console.log(`제목 글자 수: ${inputText.value.length}`);
});

//2.선택한 라디오버튼 타이틀 알림창
const submitButton = document.querySelector('.btn-submit');
const radioButtons = document.querySelectorAll('input[name=rag1]');

let selectedText = null;

submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  radioButtons.forEach((radio, index) => {
    if (radio.checked) {
      const label = document.querySelector(`label[for=ra2_${index + 1}]`);
      selectedText = label.textContent;
    }
  });

  if (selectedText) {
    alert(`'${selectedText}'이(가) 선택되었습니다.`);
  } else {
    alert(`test`);
  }
});

//● 글자수 출력
//1.input 변수 지정
const titleInput = document.querySelector('#txt2_1');
const contentsInput = document.querySelector('#txt2_2');
//2.result 변수 지정
const titleCountResult = document.querySelector('.title-count .titleCountRes');
const contentsCountResult = document.querySelector(
  '.content-count .textResult'
);

//결과1
titleInput.addEventListener('input', () => {
  //
  const currentLength = document.querySelector('#txt2_1').value.length;
  console.log(currentLength);

  titleCountResult.textContent = currentLength;
});

//결과2
contentsInput.addEventListener('input', () => {
  //
  const currentLength2 = document.querySelector('#txt2_2').value.length;
  console.log(currentLength2);
  contentsCountResult.textContent = currentLength2;
});

//● 파일첨부
//1.입력받기
const addFile = document.querySelector('#txt2_3');
//2.출력하기
const addFileName = document.querySelector('.filename');
const addFileSize = document.querySelector('.filesize');

addFile.addEventListener('change', (e) => {
  //
  const filename = e.target.files[0].name;
  const filesize = e.target.files[0].size;
  const result = filesize / 1024;
  console.log('result');

  addFileName.textContent = `파일명 : ${filename}`;
  // addFileSize.textContent = `파일크기 : ${filesize}`;
  addFileSize.textContent = `파일크기 : ${result.toFixed(2)}kb`;
});
