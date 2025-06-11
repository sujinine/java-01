// 상단 이미지와 제목 요소 선택
const topImage = document.querySelector('#topImage');
const topTitle = document.querySelector('#topTitle');

// 모든 버튼 요소들 선택
const buttons = document.querySelectorAll('.list-type14 button');

// 디버깅: 요소들이 제대로 선택되었는지 확인
console.log('topImage:', topImage);
console.log('topTitle:', topTitle);
console.log('buttons 개수: ', buttons.length);

buttons.forEach((button, index) => {
  //   console.log(button.index);
  //   console.log(index);
  //   console.log('버튼' + index + '번');
  //   console.log(`버튼 ${index}번`);

  button.addEventListener('click', () => {
    console.log('버튼 ' + (index + 1) + '번:');
    const img = button.querySelector('img');
    const title = button.textContent.trim();

    console.log('가져온 이미지:', img);
    console.log('가져온 이미지 주소:', img.src);
    console.log('alt 속성:', img.alt);
    console.log('가져온 제목:', title);

    // 상단 이미지와 제목 변경하기
    topTitle.textContent = title;
    topImage.src = img.src;
  });
});
