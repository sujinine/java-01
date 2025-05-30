/* -------------------------------------------------------------------------- */
/*                                   Return                                   */
/* -------------------------------------------------------------------------- */

/* ----------------------------- return을 사용하는 경우 ---------------------------- */
// 결과값을 반환해야 할 때
const sum = () => {
  const button = document.querySelector(".sum button");
  const resultValue = document.querySelector(".sum p");
  const number1 = document.querySelector(".sum .number1");
  const number2 = document.querySelector(".sum .number2");
};
sum();

// 조건에 따라 함수 실행을 종료해야 할 때
const message = () => {
  const button = document.querySelector(".message button");
  const input = document.querySelector(".message input");
  const output = document.querySelector(".message p");
};
message();

// 절차적인 작업을 수행할 때
const handleValid = () => {
  const private = document.querySelector(".private");
  const inputs = private.querySelectorAll("input");

  private.addEventListener("submit", () => {
    // 전송클릭 후 기능
  });
};

handleValid();

/* ------------------------- return을 사용하지 않아도 되는 경우 ------------------------- */
// 이벤트 헨들러 함수를 사용할 때z
const myName = () => {
  const button = document.querySelector(".event button");
  const input = document.querySelector(".event input");
};
myName();

// 상태변경할 때
const title = () => {
  const heading = document.querySelector(".change-title");
};
title();

// 콘솔에 로그 출력할 때
const consoleCheck = () => {
  //   console.log(`콘솔메세지 :`);
};
consoleCheck();

// DOM을 조작할 때
const listDOM = () => {
  const lis = document.querySelectorAll(".list li");
};
listDOM();

/* -------------------------------------------------------------------------- */
/*                                    호이스팅                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   호출 스케줄링                              */
/* -------------------------------------------------------------------------- */
/* ------------------------------ setTimeout ----------------------------- */
function showNotification() {
  const dialog = document.querySelector("dialog");
}

// 알림 호출
showNotification();
let seconds = 0;
/* ------------------------------- setInterval ------------------------------ */
function updateTimer() {
  const timmer = document.querySelector("#timer");
  timmer.innerText = `Timer : ${seconds++}초`;
}

// 1초마다 타이머 업데이트
// setInterval(updateTimer, 1000);

/* ------------------------------ clearTimeout ------------------------------ */
const btnStopToast = document.querySelector(".stop-toast");
btnStopToast.addEventListener("click", () => {});

/* ------------------------------ clearInterval ----------------------------- */
const btnStopTimer = document.querySelector(".stop-timer");
btnStopTimer.addEventListener("click", () => {
  clearInterval(interval);
});

/* -------------------------------------------------------------------------- */
/*                                    This                                    */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  CallBack                                  */
/* -------------------------------------------------------------------------- */
