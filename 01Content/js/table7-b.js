const tableRows = document.querySelectorAll('tbody tr');
const countElement = document.querySelector('.count');

const countPosts = () => {
    // button이 있는 행만 카운트
    const questionRows = document.querySelectorAll('tbody tr button');
    countElement.textContent = `현재 게시물 ${questionRows.length}개`;
};
countPosts();