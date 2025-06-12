// 1. HTML 요소들을 찾아서 변수에 저장
const tableRows = document.querySelectorAll('tbody tr');
const countElement = document.querySelector('.count');

// console.log(tableRows);
// console.log(countElement);
// console.log(countElement.outerHTML);

// 2. 화살표 함수로 함수 정의
const countPosts = () => {
  let rowCount = 0;

  // 3. 각 tr을 하나씩 확인
  for (let i = 0; i < tableRows.length; i++) {
    const row = document.querySelector(`tbody tr:nth-child(${i + 1})`);
    // console.log(row);

    const firstRow = document.querySelector(`tbody tr:nth-child(${i + 1}) td:first-child`);

    //일일이 체크
    console.log(firstRow.innerHTML);

    if (firstRow.textContent.includes('현재 게시물이 존재하지 않습니다')) {
      continue;
    } else {
      rowCount = rowCount + 1;
    }
  }

  // 5. 화면에 결과 표시
  countElement.textContent = `현재 게시물 ${rowCount}개`;
};

countPosts();
