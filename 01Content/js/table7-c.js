const tableRows = document.querySelectorAll('tbody tr');
const countElement = document.querySelector('.count');
// const buttonElement = document.querySelector('button');


const countPosts = () => {
    let rowCount = 0; 
    // button이 있는 tr만 선택 (질문 행만)
    for (let i = 0; i < tableRows.length; i++) {
        const buttonElement = tableRows[i].querySelector('button');
        console.log(`${i + 1}번째 행:`, buttonElement);
        console.log(`${i + 1}번째 행 HTML:`, tableRows[i].innerHTML);

        if (buttonElement) {
            // button이 있는 tr에 대해서만 처리
            rowCount = rowCount + 1;
            console.log(`${i + 1}번째 행:`, buttonElement.innerHTML);
        }
        // else {
        //     console.log(`${i + 1}번째 행:`, 'button 없음');
        // }
    }
    // 5. 화면에 결과 표시
    countElement.textContent = `현재 게시물 ${rowCount}개`;
};
countPosts();