const tableRows = document.querySelectorAll('tbody tr');
const countElement = document.querySelector('.count');



const countPosts = () => {
    let rowCount = 0; // let으로 변경하고 함수 시작 부분에 선언
    
// .answer가 없는 tr만 선택
    for (let i = 0; i < tableRows.length; i++) {
        const answerElement = tableRows[i].querySelector('.answer');
        console.log(`${i+1}번째 행:`, answerElement);
        console.log(`${i+1}번째 행 HTML:`, tableRows[i].innerHTML);

        if (!tableRows[i].querySelector('.answer')) {
            // .answer가 없는 tr에 대해서만 처리
            rowCount = rowCount + 1;
        }
    }
    // 5. 화면에 결과 표시
countElement.textContent = `현재 게시물 ${rowCount}개`;
};

countPosts();
