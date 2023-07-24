// # JavaScript 기초

// console.log("hello JavaScript");

// # Data Type
// # - 종류 : Number, Boolean, Null, Underfined, String, BigInt, Symbol

// ### Number
// 값(value) : 숫자(소수점 포함), NaN(Not a number), -Infinity, +Infinity

// console.log(3)
// console.log(3.14)
// console.log(typeof 3.14)

// console.log(NaN)
// console.log(typeof NaN)
// console.log(100 / "hello")
// console.log("hello" - 1)

// console.log(Infinity)
// console.log(typeof Infinity)
// console.log(2 / 0)
// console.log(-2 / 0)

// ### Boolean
// 값 : true of false
// console.log(true)
// console.log(false)
// console.log(typeof true)
// console.log(typeof false)

// ### Null
// - 의도적으로 "없음" or "무효"를 나타낸다.
// console.log(null) // null
// console.log(typeof null) // object

// ### Undefined
// "정의되지 않음"
// var x;
// console.log(x) // undefined
// console.log(typeof x) //undefined

// var x = null;
// console.log(x);
// console.log(typeof x);

// ### String

// console.log("Hello");
// console.log('hello');
// console.log(typeof 'hello');
// console.log(""); // -> 빈 문자
// console.log("2022");
// console.log(typeof "2022");
// console.log(2022);
// console.log(typeof 2022);

// var x = 'Hello'
// var y = 'World'
// console.log(x + y);

// ### BigInt
// -(2^53 -1) ~ (2^53 - 1) 범위(9000조) 밖 의 숫자를 표현할 때 사용한다.

// ### Symbol
// ES6 (2015년도)에서 추가된 data Type
// 객체의 속성키로 사용할 수 있다.

// ---------------------------------------------------------------------------

// # 연산자(Operator)
// 종류 : 할당연산자, 수리연산자, 비교연산자, 논리연산자, 타입연산자

// ### 할당연산자(Assignment Operator)
// 종류 : =, +=, -=, *=, /=(나눴을 때 몫을 나타낸다.), %=(나눴을 때 나머지를 나타낸다.), **=(제곱)

// = 연산자 : 변수에 값을 할당할 때 쓰인다.
// var x = 1;
// console.log(x);

// += 연산자 : 변수에 값을 더할 때 쓰인다.
// var x = 1;
// x += 2; // -> x = x + 2
// console.log(x);

// var y = 2;
// y **= 3; // -> value : 8
// console.log(y);

// var b = 6;
// b %= 4; // -> value : 2
// console.log(b);

// ### 수리연산자(Arithmetic Operator)
// 종류 : +, -, *, /, ++, --, **, %

// console.log(6 % 4);

// var x = 1;
// x++ // -> 1을 증가시킨다.
// console.log(x);

// var x = 1;
// x--; // -> 1을 감소시킨다.
// console.log(x);

// console.log(2 ** 8); // -> 2의 8승

// ### 비교연산자(Comparison Operator)
// 종류 : ==, ===, !=, !==, >, <, >=, <=, ?
// boolean을 return한다.

// == (같다.): value만 비교한다.

// console.log(1 == 1);
// console.log(1 == 2);
// console.log(1 == "1");
// console.log(0 == false); // -> true
// console.log(0 == true); // -> false
// console.log(1 == true); // -> true
// console.log(1 == false); // -> false
// console.log(null == undefined) // -> true
// console.log("" == false) // -> true
// console.log("" == 0) // -> true

// === : value와 type 모두 비교한다. (비교하는 것이 엄격하며, == 보다 자주 사용된다.)

// console.log(0 === "") // -> false
// console.log(1 === "1") // -> false
// console.log(1 === true) // -> false
// console.log(0 === false) // -> false
// console.log(null === undefined) // -> false

// != (같지 않다.) : value만 비교를 한다. 

// console.log(1 != 1); // -> false
// console.log(1 != "1"); // -> false
// console.log(1 != 0); // -> true
// console.log(1 != "0"); // -> true
// console.log(0 != true); // -> true
// console.log(0 != false); // -> false

// !== : ===와 똑같이 value와 type을 엄격히 비교한다. 둘 중 하나라도 다르면 true이다.

// console.log(1 !== "1"); // -> true
// console.log(1 !== 1); // -> false
// console.log(0 !== false); // -> true

// ? (삼항연산자, Ternary)
// ex : 조건 ? 참일 때 : 거짓일 때

// var r = 1 > 0 ? "foo" : "bar"
// console.log(r) // -> foo

// var r = 1 < 0 ? "foo" : "bar"
// console.log(r) // -> bar

// ### 논리연산자(Logical Operator)
// 종류 : &&, ||, !

// && : 그리고 (and)

// var x = 1 > 0 && 1 < 2;
// console.log(x); // -> true
// var x = 1 > 0 && 1 > 2;
// console.log(x); // -> false

// || : 또는 (or)

// var x = 1 > 0 || 1 < -1;
// console.log(x); // -> true
// var x = 1 < 0 || 1 < -1;
// console.log(x); // -> false

// ! : 부정 (not)

// console.log(!true); // -> false
// console.log(!false); // -> true
// console.log(!(1 > 0)); // -> false
// console.log(!(0 > 1)); // -> true
// var x = 1 > 0;
// console.log(!x); // -> false

// ### 타입 연산자(Type Operator)
// 종류 : typeof, instanceof
// value의 type을 return한다.

// console.log(typeof 0); // -> number
// console.log(typeof null); // -> object
// console.log(typeof undefined); // -> undefined

//----------------------------------------------------------//
/*


*/
// /* */ : 줄바꾸기가 가능한 주석처리
//----------------------------------------------------------//

