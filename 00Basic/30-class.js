/* -------------------------------------------------------------------------- */
/*                                  Prototype                                 */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  ES6 Class                                 */
/* -------------------------------------------------------------------------- */

// Prototype방식
// function User(first, last) {
//   this.firstname = first;
//   this.lastname = last;
// }

// User.prototype.getFullName = function () {
//   return `${this.firstname}${this.lastname}`;
// };

// const isName = new User("ha", "sungpil");
// const isNickName = new User("rebe", "hayan");

// console.log(isName);
// console.log(isNickName);
// console.log(isName.getFullName());
// console.log(isNickName.getFullName());

/* -------------------------------------------------------------------------- */
/*                               Getter, Setter                               */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   Static                                   */
/* -------------------------------------------------------------------------- */

// 부모 클래스: Animal
class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    console.log(`${this.name}이(가) 소리를 냅니다.`);
  }
}

// 자식 클래스: Dog
class Dog extends Animal {
  constructor(name, breed) {
    super(name); // 부모 클래스의 생성자 호출
    this.breed = breed; // 자식 클래스만의 속성
  }

  sound() {
    super.sound(); // 부모 클래스의 메서드 호출
    console.log(`${this.name} (${this.breed} 종): 멍멍!`);
  }
}

// 인스턴스 생성
const dog = new Dog("뽀삐", "푸들");
dog.sound(); // 뽀삐이(가) 소리를 냅니다. 뽀삐 (푸들 종): 멍멍!

// console.log(dog instanceof Dog); // true
// console.log(dog instanceof Animal); // true
