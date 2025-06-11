/* -------------------------------------------------------------------------- */
/*                                     For                                    */
/* -------------------------------------------------------------------------- */
// const lis = document.querySelectorAll('.list li');
// // console.log(lis[0]); // 첫 번째 li 요소 출력
// // console.log(lis[1]); // 두 번째 li 요소 출력
// // console.log(lis[1].innerHTML); // 두 번째 li 요소 내부 내용 출력
// // console.log(lis[1].outerHTML); // 두 번째 li 요소 tag 출력

// for (let index = 0; index < lis.length; index++) {
//   //   console.log(index);
//   //   console.log(lis[index].outerHTML); // 1.각 li 요소의 HTML 태그 포함 내용 출력
//   //   console.log(lis[index].innerHTML); // 2.각 li 요소의 내부 내용만 출력
//   //   lis[index].classList.add('item');
//   lis[index].classList.add(`item${index + 1}`); // 3.각 li 요소에 클래스 추가
//   //   console.log(lis[index]); // 3.각 li 요소를 콘솔에 출력
//   console.log(lis[index].outerHTML); // 3.각 li 요소를 콘솔에 출력
// }

// // 개인학습1: 각 li의 HTML '태그 포함 내용' 출력
// lis.forEach((li) => {
//   console.log(li.outerHTML);
// });

// // 개인학습2: 또는 innerHTML로 '내부 내용'만
// lis.forEach((li) => {
//   console.log(li.innerHTML); // item1, item2 등 출력
// });

// const ul = document.querySelector('.for');
// console.log(ul.outerHTML);

// const forList = () => {
//   const arry = ['item1', 'item2', 'item3', 'item4', 'item5']; // 배열 생성
//   const ul = document.querySelector('.for');
//   //   console.log(arry);

//   for (let index = 0; index < arry.length; index++) {
//     const lis = document.createElement('li'); // li 요소 생성
//     console.log(lis);

//     lis.textContent = arry[index]; // li 요소에 텍스트 추가
//     // console.log(lis.textContent);
//     // ul.prepend(lis); // ul 요소에 li 요소 추가
//     lis.classList.add(`ico${index + 1}`); // li 요소에 클래스 추가

//     // 1.hue값
//     lis.style.setProperty('--color', 80 * index);

//     //2.밝기
//     // const lightnessValue = 10 + index * 20;
//     // lis.style.setProperty('--lightness', lightnessValue);

//     //3.saturation
//     // const saturationValue = 0 + index * 20;
//     // lis.style.setProperty('--saturation', saturationValue);

//     ul.append(lis); // ul 요소에 li 요소 추가
//   }
// };

// forList(); // -> 함수 호출
/* -------------------------------------------------------------------------- */
/*                                   For of                                   */
/* -------------------------------------------------------------------------- */
const arr = ['a', 'b', 'c'];

for (const code of arr) {
  console.log(code); //a,b,c
}

const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
  console.log(`I like ${fruit}`);
}

// 숫자 배열
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
  console.log(num * 2); // 2, 4, 6, 8, 10
}

const forOfList = document.querySelector('.forof');
const profiles = ['이븐한12', '이균', '물코기'];

for (const isName of profiles) {
  const li = document.createElement('li');
  li.textContent = isName;
  forOfList.append(li);
}

const id = 'sujini';
const idList = document.querySelector('.forof2');

for (const item of id) {
  //   console.log(item); // s, u, j, i, n, i
  const li = document.createElement('li');
  li.textContent = item;
  idList.append(li);
  //   console.log(li.outerHTML); // 각 문자에 대한 li 요소의 outerHTML 출력
}

const lis = document.querySelectorAll('.forof2 li');
lis.forEach((li, index) => {
  //
//   li.style.setProperty('--color', index * 25);
  li.style.setProperty('--color', index * 50);
  li.style.fontSize = `${(index+1) * 20}px`;
});

/* -------------------------------------------------------------------------- */
/*                                   For in                                   */
/* -------------------------------------------------------------------------- */
const user = {
	name:'ha',
	age:81,
	isValid : true,
}

for( const key in user){
	// console.log(key); //객체 키 출력
	// console.log(user[key]); // 키값 출력
  console.log(`${key}:${user[key]}`); // 키와 키값을 출력
}