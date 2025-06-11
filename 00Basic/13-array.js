/* -------------------------------------------------------------------------- */
/*                                     배열                                    */
/* -------------------------------------------------------------------------- */
<<<<<<< HEAD
// const arr = ['A', 'B', 'C'];
// console.log(arr[0]);
// console.log(arr.at(-1));
// console.log(arr.length);

// const arr1 = ['A', 'B', 'C'];
// const arr2 = ['E', 'F', 'G'];
// const arr3 = arr1.concat(arr2);
// // console.log(arr3);

// const arry4 = [...arr1, ...arr2];
// console.log(arry4);
// const arr = [1, 2, 3, 4];
// const isValid = arr.every((item) => {
//   return item > 0;
// });
// console.log(isValid);

//filter()
// const arr = [1, 2, 3, 4, 100];
// const isValid = arr.filter((item) => {
//   //   return item > 5;
//   return item < 5;
// });

// console.log(isValid);

// const isValid = arr.filter((item) => {
//   if (item !== 100) {
//     return item;
//   }
// });

// console.log(isValid);

// const users = [
//   {
//     name: '이수진',
//     birth: 2000,
//   },
//   {
//     name: '김수진',
//     birth: 2001,
//   },
//   {
//     name: '정수진',
//     birth: 2002,
//   },
// ];

// const isValid = users.filter((item) => {
//   //
//   if (item.birth > 2001) {
//     return item;
//   }
// });

// console.log(isValid);

//find
// const arr = [1, 2, 3, 4, 100];

// const isValid = arr.find((item) => {
//   return item > 3;
// });

// console.log(isValid);

//find();
// const isValid = users.find((item) => {
//   if (item.name === '김수진') {
//     return item;
//   }
// });

// console.log(isValid);

//findIndex
// const arr = [1, 2, 2, 4, 100];
// const isValid = arr.findIndex((item) => {
//   return item > 3;
// });

// console.log(isValid); // 3

//flat
// const arr = [1, 2, [4, 5, [6, 7]]];
// console.log(arr);
// console.log(arr.flat());
// console.log(arr.flat(2)); // 깊이를 인수로 넣으면 깊이로 이어붙인다.
// console.log(arr.flat(Infinity)); // 깊이와 상관없이 모두 붙인다.

//join
// const arr = ['apple', 'banana', 'code'];

// console.log(arr.join()); // apple,banana,code 기본은 쉼표로 구분한다.
// console.log(arr.join('')); // applebananacode 쉼표를 제거한다.
// console.log(arr.join('/')); // apple/banana/code

//map
// const arr = [1, 2, 4, 5];
// const numbers = arr.map((item) => {
//   return item * 2;
// });

// console.log(numbers); // [2,4,8,10]

// const users = [
//   { name: '하성필', year: 1981 },
//   { name: '아무개', year: 1980 },
//   { name: '리베하얀', year: 1979 },
// ];

// const newUsers = users.map((user) => ({
//   ...user,
//   age: 20,
//   city: 'seoul',
// }));

// console.log(newUsers); // 각각 추가되서 나옴

// const arr = ['apple', 'banana', 'code'];
// console.log(arr.pop()); // code
// console.log(arr); // apple,banana

// const arr = ['apple', 'banana', 'code'];
// console.log(arr.push('tomato'));
// console.log(arr);
// // const newArr = arr.push('orange');
// // console.log(newArr);
// const newArr2 = arr.push('orange', 'data');
// // console.log(newArr2);

// console.log(newArr); // 4

//reduce
//ex1
// const arr = [1, 2, 4, 5];
// const sum = arr.reduce((init, items) => {
//   // 1+2 >> 3 + 4 >> 7 + 5 각각 더하면서 반복하고 리턴한다.
//   return init + items;
// }, 0); // 초기시작값

// console.log(sum); // 12

//ex2
// const users = [
//   { name: 'a', age: 20 },
//   { name: 'b', age: 50 },
//   { name: 'c', age: 35 },
// ];

// const totalAge = users.reduce((acc, cur) => {
//   return acc + cur.age;
// }, 0);

// console.log(totalAge); // 전체나이
// console.log(totalAge / users.length); // 평균나이
// console.log((totalAge / users.length).toFixed(1)); // 소수점 1자리 자르기

//shift
// const arr = ['A', 'B', 'C'];
// const result = arr.shift();

// console.log(result); // A
// console.log(arr); // [b,c]

// const arr = ['A', 'B', 'C', 'D', 'E', 'F'];

// console.log(arr.slice(0, 2)); //인덱스 0부터 2 직전까지 (0, 1번째 요소)
// console.log(arr.slice(4, -1));
// //인덱스 4부터 끝에서 1번째 직전까지
// //-1은 마지막 요소를 의미하므로, 'F' 직전까지
// //결과적으로 'E'만 가져옵니다
// console.log(arr.slice(4));
// //인덱스 4부터 끝까지
// //'E'와 'F'를 가져옵니다

// const arr = [1, 2, 4, 5];

// const isValid = arr.some((item) => {
//   return item > 4;
// });

// console.log(isValid); // true

//
// const arr = [1, 20, 4, 5, 100];
// console.log(arr.sort());

// // arr.sort();
// // console.log(arr); // 1, 100, 20, 4, 5

// arr.sort((a, b) => {
//   return a - b;
// });
// console.log(arr); // 1, 4, 5, 20, 100

// arr.sort((a, b) => {
//   return b - a;
// });
// console.log(arr); // 100, 20, 5, 4, 1

// //unshift
// const arr = ['A', 'B', 'C'];
// // const result = arr.unshift('X');
// const result = arr.unshift({
//   //
//   name: 'test',
// });

// console.log(result); // 4출력
// console.log(arr); //X,A,B,C

//
// const lis = document.querySelectorAll('.list li');
// console.log(Array.from(lis));

//const lis = document.querySelectorAll('li');
// const maxHeight = Array.from(lis).reduce((maxHeight, li) => {
//   const liHeight = li.offsetHeight;
//   return liHeight > maxHeight ? liHeight : maxHeight;
// }, 0);

// console.log(maxHeight);

// const arrylike = {
//   0: 'a',
//   1: 'b',
//   2: 'c',
//   length: 3,
// };
//length 속성은 유사 배열 객체에서 "얼마나 많은 요소가 있는지"를 알려주는 필수 정보입니다!

// Array.from(arrylike).forEach((item) => console.log(item));
// Array.from(arrylike).forEach((item) => {
//   console.log(item);
// });

// const result = Array.from(arrylike);
// console.log(result);

// Array.from(arrylike).forEach((item) => {
//   console.log(item);
// });

// const lis = document.querySelectorAll('.list li');

//1.노드 배열로 보는법
const lis = document.querySelectorAll('li');
const maxHeight = Array.from(lis).reduce((maxHeight, li) => {
  const liHeight = li.offsetHeight;
  return liHeight > maxHeight ? liHeight : maxHeight;
}, 0);

console.log(maxHeight);
// console.log(lis);

//2.tag로 보는법-1
// Array.from(lis).forEach((li) => {
//   console.log(li.outerHTML);
// });

//2.tag로 보는법-2
// lis.forEach((li) => {
//   console.log(li.outerHTML);
// });

//2.tag로 보는법-3
// console.log(lis[0].outerHTML);
=======
>>>>>>> af5e0b1c9e72058f7f0158aca8d27e7e022a533c
