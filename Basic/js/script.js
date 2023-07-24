// # JavaScript 기초

// 2022-08-31

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

// =====================================================================================================================

// 2022-09-05 두번째 JavaScript 강의

// # 조건문 (Condition)
// if/else/elseif
// switch

// if/else/elseif

// if 단독으로 쓰일 때
// if (1 > 0) {
//     console.log("foo");
// } // -> "foo"를 return한다.

// if (1 > 2) {
//     console.log("foo");
// } // -> 1은 2보다 작으므로(false) 아무것도 return하지 않는다.(실행되지 않는다.)

// if (1 > 0) { // true
//     console.log("foo");
// } else { // false
//     conseole.log("bar");
// }

// if (1 > 0) { // 조건이 참인 경우
//     console.log("foo");
// } else if (1 > 2) { // 조건이 참인 경우
//     console.log("bar");
// } else { // 참이 없을 경우
//     console.log("baz");
// }

// 조건 부분에 boolean이 아닌 data type이 올 경우

// console.log(1 > 0) // 비교연산자는 boolean을 return한다. 

// if (true) {
//     console.log("foo");
// }

// if ("") { // 조건에서 빈문자는 false로 취급한다.
//     console.log("Foo");
// }

// if ("hello") { // 빈문자가 아닌 경우 true로 취급한다.
//     console.log("foo");
// }

// if (null) { // false
//     console.log("foo");
// }

// if (undefined) { // false
//     console.log("foo");
// }

// var x; // <-undefined 형태

// if (x) { // undefined는 false 취급한다.
//     console.log('foo');
// }

// if (0) { // false "0"은 빈문자로 취급된다.
//     console.log("foo");
// }

// if (-2) { // true
//     console.log("bar");
// }

// if (1) { // true
//     console.log("baz");
// }

// Switch

// var result;

// // switch의 특징은 엄격비교이다. (value와 type을 모두 비교)
// // ===
// // !==
// switch ("3") {
//     case 1: // 조건
//         result = "foo";
//         break;
//     case 2:
//         result = "bar";
//         break;
//     case 3:
//         result = "baz";
//         break;
//     default:
//         result = "null";
// }

// console.log(result);

//---------------------------------------------------------------

// # 반복문 (Loop)
// For
// While

// For 반복문

// var sum = 0;

// // 1에서 10까지 더하기
// for (var i = 0; i <= 10; i++) {
//     sum += i;
// }

// console.log(sum);

// for 문에서 break와 continue keyword 사용하기

// for (var i=0; i<=10; i++) {
//     if (i===5) {
//         break;
//     }
//     console.log(i);
// }

// for (var i=1; i<=10; i++) {
//     if (i===5) { // 건너뛴다.
//         continue;
//     }
//     console.log(i);
// }

// while 반복문

// var sum = 0;

// var i = 1; // 초기값
// while (i <= 10) { // 종료값
//     sum += i; // sum = sum + i 와 동일
//     i++; // 증감값
// }

// console.log(sum);

//-----------------------------------------------------

// Q. 1부터 10까지의 숫자 중 짝수만 출력해보세요.

// for (var i=2; i<=10; i+=2) {
//     console.log(i)
// } 

// for (var e=2; e<=10; e++) {
//     if (e%2 === 0) {
//         console.log(e);
//     }
// }

// var j = 0;
// while (j <= 8) {
//     j+=2    
//     console.log(j)
// }

//--------------------------------------------------

// # 함수 (Function)
// 호출될 때만 실행되는 한 block의 code

// 함수를 선언하는 방식 (function declaration)
// 1 함수선언식
// 2 함수표현식
// 3 화살표함수

// 함수선언식
// function f() { //function 함수이름() { block }
//     // 함수 정의 (function definition)
//     console.log("foo");
// }

// // 호출
// f()

// 함수표현식
// 변수에 익명함수를 할당한다.
// function과 () 사이에 아무 것도 없는 것을 익명함수라 한다.
// var f = function () {
//     console.log("foo");
// }

// //호출
// f()

// 화살표함수
// 함수표현식의 변형
// 문법이 간단하다.
// var f = () => {
//     console.log("foo");
// }

// //호출
// f();

//---------------------------------------------

// Hoisting (게양)
//함수의 선언이 호출 시점보다 위로 올라간다.
//함수선언식에만 적용된다.

// 함수 호출
// f();

// // 함수 선언
// function f() {
//     console.log("foo");
// }

//화살표함수로 hoisting할 시 error가 뜬다.
// console.log(f); // undefined
// f();

// var f = () => {
//     console.log("foo");
// }

// 함수에서의 return keyword 사용

// function f() {
//     console.log("foo");
//     return;
//     // return 아래의 코드는 실행되지 않는다.
//     console.log("bar");
// }

// f();

// function f() {
//     return console.log("foo");
//     console.log("bar");
// }

// f();

// 함수의 인자(parameter, argument)

// function f(data) { // data - parameter
//     console.log("argument: " + data);
// }

// f("gregory"); // "gregory" - argument
// f(12); // 12 - argument

// function f(a, b) {
//     return a + b;
// }

// console.log(f(1,2));

//-------------------------------------------

// Q. 사칙연산 함수를 만들어 보세요.
// 함수 이름은 add(+), substract(-), multiply(*), divide(/) 
// 함수의 return 값을 변수에 담아 출력해보세요.

// function add(a, b) {
//     return a + b;
// }

// function substract(a, b) {
//     return a - b;
// }

// function multiply(a, b) {
//     return a * b;
// }

// function divide(a, b) {
//     return a / b;
// }

// var a = add(90,2)
// var b = substract(51,31)
// var c = multiply(6,2)
// var d = divide(8,2)

// console.log(a,b,c,d);

//--------------------------------------------------------

// # Callback
// 다른 함수의 인자가 되는 함수

// function f1(callback) {
//     var r = callback() // f1 함수의 내부에서 실행된다.
//     console.log(r);
// }

// function f2() {
//     return "foo";
// }

// // f1(f2()) --> 잘못된 호출방법이다.
// f1(f2); // f2는 f1의 callback이다.

// function f1(callback) {
//     var r = callback();
//     console.log(r);
// }

// f1(function() { // 익명함수가 callback일 때
//     return "foo"
// })


// function f1(callback) {
//     var r = callback();
//     console.log(r);
// }

// function f2() {
//     return "foo";
// }

// f1(function () { // 익명함수가 callback이다.
//     return f2(); // -> 실행결과를 return할 뿐이다.
// })

//--------------------------------------------------------

// 2022-09-07 세번째 JavaScript 강의

// function f1(callback) {
//     let r = callback();
//     console.log(r);
// }

// function f2() {
//     return "foo";
// }

// f1(f2);

// function f(callback) {
//     // f함수 내부에서 callback함수를 실행
//     let r = callback ()
//     console.log(r);
// }

// // callback이 익명함수일 때
// f(function () {
//     return "foo";
// })

// callback에 인자가 있을 때

// function f1(callback) {
//     let r = callback()
//     console.log(r);
// }

// function f2(a, b) {
//     return a + b;
// }

// // f1(f2(1, 2)); // <- 실행되지 않는다.

// f1(function () {
//     return f2(5, 2); // -> f2는 익명함수에서 실행이 된다.
// })

// function f1(callback) {
//     var r = callback(1, 2);
//     console.log(r);
// }

// function f2(a, b) {
//     return a + b;
// }
// // 호출방법
// f1(function (x, y) {
//     return f2(x, y);
// })

//-----------------------------------------------------

// # 변수의 종류
// var, let, const

// var
// 변수를 선언하고 값(value)을 정의한다.
// 자유도가 높으나, 느슨하다.

// var foo = "bar"; // -> foo : 변수 "bar" : 값(value)
// console.log(foo);

//선언과 정의를 따로도 가능하다.
// var foo; // 선언
// foo = "bar" // 정의

// console.log(foo);

// var foo; // 선언
// foo = "bar"; // 정의
// foo = "baz"; // 재정의 -> 덮어쓰기의 개념

// console.log(foo);

// var foo = "bar"; // 선언, 정의
// var foo = "baz"; // 재선언, 재정의

// console.log(foo);

// let
// var보다는 덜 느슨하다.
// 재정의는 되나 재선언은 되지 않는다.

// let foo = "bar"; // 선언하고 값을 할당하는 것을 초기화라고 한다.
// console.log(foo);

// let foo; // 선언
// foo = "bar"; // 정의

// console.log(foo);

// let foo; // 선언
// foo = "bar"; // 정의
// foo = "baz"; // 재정의

// console.log(foo);

// let foo = "bar"; // 선언
// let foo = "baz"; // 재선언 불가

// console.log(foo);

// const (constant, 상수)
// 한번 선언시 재정의, 재선언불가
// 선언과 정의를 같이 해주어야 한다.
// 가장 엄격한 함수
// 가장 많은 활용을 한다.

// const foo = "bar"; // 선언 및 정의 (초기화)
// console.log(foo);

// const foo; // 선언
// foo = "bar"; // 정의 따로 불가

// console.log(foo);

// const foo = "bar";
// const foo = "baz"; // 재선언 불가

// console.log(foo);

//---------------------------------------------

// # 변수의 범위 (scope)
// 전역 범위
// 블록 범위
// 함수(지역) 범위

// 전역 범위 (global scope) : 함수나 블록 밖에서 선언된 변수의 범위 
// 어디서든 접근이 가능하다.

// const foo = "bar"; // -> 변수의 종류랑은 다른 개념. ps) const가 let이나 var로 쓰여도 상관이 없다.

// function f() {
//     // 함수 내부에서 전역변수에 접근 가능 -> 전역변수는 전역범위를 갖는다.
//     console.log(foo);
// }
// f();

// { // block : 조건문, 반복문의 내부
//     // 블록 내부에서 전역변수에 접근 가능
//     console.log(foo);
// }

// // 함수나 블록이 아닌 범위에서 전역변수에 접근 가능
// console.log(foo);

// 함수(지역) 범위 : 함수 안에서 선언된 변수의 범위
// 함수 내부에서 만든 변수는 함수 내부에서만 접근이 가능하다.

// function f() {
//     // 함수(지역) 범위를 갖는 변수
//     let foo = "bar";

//     //함수 내부에서 접근 가능
//     console.log(foo);
// }
// f();

// // 함수 외부에서 지역변수에 접근 불가
// // console.log(foo); // foo is not defined

// 블록 범위 (block scope) : 블록 안에서 선언된 변수의 범위 
// 블록 범위만이 변수의 종류에 따라 달라진다.
// {
//     var foo = "foo";
//     let bar = "bar";
//     const baz = "baz";
// }

// console.log(foo); // var 접근 가능
// console.log(bar); // let 접근 불가
// console.log(baz); // const 접근 불가
// let과 const가 엄격하기에 이렇게 된다.

//-------------------------------------------

// 함수의 범위
// 전역 범위
// 블록 범위
// 함수(지역) 범위

// // 전역 범위 : 블록 또는 함수 외부에서 선언된 함수의 범위
// function f() {}

// // 블록 또는 함수 외부에서 접근
// console.log(f);

// // 블록 내부에서 접근
// { console.log(f); }

// // 함수 내부에서 접근
// x()
// function x() {
//     console.log(f);
// }

// 함수(지역) 범위 : 함수 안에서 선언된 함수의 범위
// f1() // hoisting
// function f1() {
//     // 지역범위를 갖는 함수
//     function f2() {}
//     console.log(f2);
// }

// // console.log(f2); // 접근 불가

// // 블록 범위 : 블록 안에서 선언된 함수의 범위

// { // 블록 안에서 선언된 함수
//     function f() {}
// }

// console.log(f); // 접근 가능

//-----------------------------------------

// setInterval(callback, ms)
// ms간격으로 callback 실행
// 1s = 1000ms

// console.log(new Date().toLocaleTimeString());

//-------------------------------------------

// Q. 콘솔에 현재시간을 알려주는 시계를 만들어보세요. 

// function clock() {
//     console.log(new Date().toLocaleTimeString());
// }
// setInterval(clock, 1000);

//---------------------------------------------

// 강사풀이

// setInterval(function () {
//     const time = new Date().toLocaleTimeString();
//     console.log(time);
// }, 1000)

//---------------------------------------------

// # Array (배열) => Python의 list
// 한 개 이상의 값을 가진 상태

// let arr = [10, 20, 30];

// console.log(arr);
// console.log(arr[0]); // 배열의 0번째(index) value에 접근
// // index는 0부터 시작한다. 0 => 10 , 1 => 20, 2 => 30
// console.log(arr[2]);
// console.log(arr.length); // => 3
// // length : array의 value의 개수

// let arr = ["foo", 20, "baz"];

// console.log(arr);
// // console.log(arr[0]);
// // console.log(arr.length);

// // Update
// arr[1] = "bar"; // => 20이 "bar"로 바뀌어 출력된다.
// console.log(arr);

// // add
// arr[3] = 40; // => 40이 let arr에 마지막에 추가된다.
// console.log(arr);
// arr[5] = 60;
// console.log(arr); // => 5번째 칸에 60이 추가되며, 4번째 칸은 empty item으로 출력이 된다.

// 반복문으로 Array 순회하기

// const rec = ["foo", "bar", "baz"];

// for (let i=0; i<rec.length; i++) {
//     console.log(rec[i]);
// }

//------------------------------------------------------

// Q. 1부터 10까지의 숫자로 이루어진 배열을 만들어보세요.

// let arr = [];

// // console.log(arr);

// for (let i=1; i<10; i++) {
//     console.log(arr[i]);
// }

//강사 풀이

// let arr = [];

// for (let i=0; i<10; i++) {
//     arr[i] = i+1;
// }

// console.log(arr);

//-------------------------------------------------

// # Object (객체) => Python의 library
// 관련된 데이터와 함수의 집합
// key와 value 쌍으로 이루어져있다.

// cat object를 만든다.
// const cat = {
//     // key(property, 속성) : value
//     name: "Kitty",
//     age: 2,
//     home: null,
//     // value가 함수인 것을 Method(메서드)라고 부른다.
//     sound: function () {
//         return "meow";
//     }
// }

// // 객체에 접근
// console.log(cat);
// // cat의 name 속성에 접근
// console.log(cat.name);
// console.log(cat["name"]);
// // cat의 age 속성에 접근
// console.log(cat.age);
// // cat의 존재하지 않는 속성
// console.log(cat.color); // undefined
// // cat의 home 속성에 string을 사용해서 접근
// console.log(cat["home"]);
// // cat의 sound 메서드에 접근
// console.log(cat.sound());

// 객체를 업데이트 하기

// const cat = {
//     name: "Kitty",
//     age: 2,
//     home: null,
//     sound: function () {
//         return "meow";
//     }
// }

// cat의 home 속성값 변경
// cat.home = "Mapo-gu";
// console.log(cat);

// cat의 age 속성 삭제
// delete cat.age;
// console.log(cat);

// cat에 새로운 속성 color 추가
// cat.color = "Mixed";
// console.log(cat);
// console.log(cat["color"]);

//------------------------------------------------

// Q. 숫자를 대입하면 사칙연산의 결과값을 return하는 함수를 만들어보세요.

// 강사풀이

// function calc(a, b) {
//     return {
//         add: a + b,
//         substract: a - b,
//         multiply: a * b,
//         divide: a / b
//     }
// }

// let r = calc(1, 2);
// console.log(r);

//-------------------------------------------------

// 2022-09-14

// # 에러와 에러처리

// app crashed
// f()

// try catch : 구문을 이용한 error 처리

// try {
//     // 코드를 작성한다.
//     f(); 
// } catch (err) {
//     // 에러를 발생할 경우 catch 블록에서 처리한다.
//     console.error(err);
// } 

// try {
//     // syntaxerror(문법에러)는 compile 에러를 발생시킨다.
//     // compile : 컴파일러가 코드를 실행시키기 위해 읽는 단계
//     // try catch에서 compile에러는 처리할 수 없다.
//     f());
// } catch (err) {
//     console.error(err);
// }

// error 객체의 종류
// RangeError
// ReferenceError
// SyntaxError
// TypeError
// URIError

// error 객체의 속성(property)
// name
// message
// stack

// try {
//     f();
// } catch (err) {
//     console.error('name', err.name); // ReferenceError
//     console.error("message", err.message); // f is not defined
//     // console.error("stack", err.stack); // error에 대한 기타정보들
// }

// Range Error
// try {
//     const pi = Math.PI;

//     console.log(pi);

//     // RangeError : 값이 정해진 범위를 벗어낫을 때 발생한다.
//     // toPrecision() 인자는 1에서 100 사이여야만 한다.
//     console.log(pi.toPrecision(200));

// } catch (err) {
//     console.error(err);
// }

// ReferenceError : 자주 보게 되는 error
// try {
//     // ReferenceError
//     // 존재하지 않는 변수를 참조(refer)했을 때 발생한다.
//     console.log(x);
// } catch (err) {
//     console.error(err);
// }

// SyntaxError : 심각한 에러라 자주 발생하진 않으며, vs에서 잡아주는 경우가 많다.
// try {
//     // SyntaxError (문법 에러)
//     // SyntaxError는 컴파일에러를 발생시킨다.
//     console.log(2022));
// } catch (err) {
//     console.error(err);
// }

// TypeError
// try {
//     // TypeError (타입 에러)
//     // 값이 예상된 타입이 아닐 시 발생한다.

//     // setInterval(callback, ms)
//     // TypeError : callback은 함수여야한다. null을 전달받았다.
//     setInterval(null, 1000);
// } catch (err) {
//     console.error(err);
// }

// URIError
// try {
//     // URIError : URI malformed (URI가 잘못 형성되었다.)
//     decodeURI("%"); // incode는 decode와 반대되는 개념
// } catch (err) {
//     console.error(err);
// }

// 커스텀 에러객체로 커스텀 에러 발생시키기
// try {
//     const foo = "baz";

//     if (foo !== "bar") {
//         // customError object 생성
//         const err = {
//             name: "CustomError",
//             message: "bar만 가능합니다."
//         }
//         // customeError object를 throw한다. 제일 중요하다.
//         throw err;
//     }

// } catch (err) {
//     console.error(err);
// }

// try catch finally
// try {
//     console.log("foo");
// } catch (err) {
//     console.error(err);
// } finally {
//     // error 발생 유무와 상관없이 항상 실행된다.
//     console.log(".");
// }

// -----------------------------------

// Q. 15살 소녀가 cu에서 술을 사려고 한다.
// 커스텀에러를 발생시켜서 이 상황을 중지시켜야한다.

// try {
//     const girl = 15;

//     if (girl !== 20) {
//         const err = {
//             name: "No",
//             message: "only Adult"
//         }
//         throw err
//     };
// } catch (err) {
//     console.error(err);
// }

// // --------------------------------------
// // 강사풀이

// try {
//     const age = 15;

//     console.log("15살 소녀가 술을 사러 cu에 가고있다.");

//     if (age < 18) {
//         // 커스텀 에러객체 생성
//         const err = {
//             name: "나이 에러",
//             message: "3년 뒤에 다시 오세요"
//         }
//         // 커스텀 에러 객체를 throw한다.
//         throw err;
//     }
    
//     // throw 밑의 코드는 실행되지 않는다.
//     console.log("술사기 성공!")
    
// } catch (err) {
//     console.error(err)
// }

// app crushed
// throw "Error!"

// -------------------------------------------

// # class
// 객체 생성을 위한 템플릿

// class Cat { // 첫 글자는 대문자여야한다.

//     // constructor (생성자)
//     // 인스턴스를 생성하자마자 실행되는 특별한 메서드
//     // constructor는 아무것도 return할 수 없다.
//     // *주로 인스턴스 초기 속성을 설정하는 데 주로 사용된다.*
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// // cat1은 object이다.
// // cat1은 Cat의 인스턴스이다.
// const cat1 = new Cat("kitty", 2);
// // cat2는 object이다.
// // cat2는 Cat의 인스턴스이다.
// const cat2 = new Cat("Alfredo", 3);

// console.log(cat1);
// console.log(cat2);

// console.log(cat1 instanceof Cat); // True
// console.log(cat2 instanceof Cat); // True
 
// class의 속성과 메서드

// class MapoguCat {
//     constructor(name) {
//         this.name = name;
//     }

//     // MapoguCat의 속성 -> 다른 인스턴스를 주어도 변화 x
//     home = "Mapo-gu";

//     // MapoguCat의 메서드 -> 다른 인스턴스를 주어도 변화 x
//     sound() {
//         return "Meow"
//     }
// }

// const cat1 = new MapoguCat("kitty");
// const cat2 = new MapoguCat("muzy");

// console.log(cat1);
// // MapoguCat의 home 속성을 상속(inheritance)받았다.
// console.log(cat1.home); // Mapo-gu
// // MapoguCat의 sound 메서드를 상속(inheritance)받았다.
// console.log(cat1.sound()); // Meow
// console.log(cat2);
// console.log(cat2.home); // Mapo-gu
// console.log(cat2.sound()); // Meow

// ------------------------------------------
// Q. 삼산동에 살고있는 하얀색 말티즈를 생성하기 위한 템플릿을 작성해보세요.

// class Dog {
//     constructor(home, color, type) {
//         this.home = home;
//         this.color = color;
//         this.type = type;
//     }
//     sound () {
//         return "bow"
//     }
//     anger () {
//         return "grrr"
//     }
// }

// const doggy = new Dog("samsandong", "white", "Maltize");

// console.log(doggy);
// console.log(doggy.sound());
// console.log(doggy.anger());

// ----------------------------------------
// 강사풀이

// class SamsandongMaltese {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     // SamsandongMaltese의 속성
//     home = "Samsan-dong"
//     color = "white"
    
//     // SamsandongMaltese의 메서드 
//     sound() {
//         return "멍멍"
//     }
// }

// const maltese = new SamsandongMaltese("snow",2);
// console.log(maltese);
// console.log(maltese.sound());

// --------------------------------------------------------

// Q2.평리단길에 있는 고양이를 생성하기 위한 템플릿을 생성하시오
// 메서드의 인자를 전달해보세요.

// class Cat {
//     constructor(name, age, color) {
//         this.name = name
//         this.age = age
//         this.color = color
//     }

//     home = "평리단길"
//     type = "cat";

//     sound() {      
//         return "meow"
//     }

//     sound2() {
//         return "grrr"
//     }
// }

// const cat1 = new Cat("mike", 2, "black");
// const cat2 = new Cat("browny", 4, "white");
// console.log(cat1);
// console.log(cat1.sound());
// console.log(cat2);
// console.log(cat2.sound2());

// ----------------------------------------------------

// 강사 풀이

// class Cat {
//     // 생성자 메서드
//     constructor (name) {
//         this.name = name;
//     }
//     sound(x) { // -> 인자(x)를 배출하는 메서드
//         return x;
//     }
// }

// // class의 instance 생성
// const cat = new Cat("kitty");
// console.log(cat);
// // cat의 sound메서드 호출
// // cat의 sound메서드에 인자를 전달한다.
// console.log(cat.sound("meow"));

//---------------------------------------------------

// 2022-09-16

// # class의 static 속성과 static 메소드
// class 자체의 속성과 메서드이다.
// instance는 호출할 수 없다.
// class와 관련된 instance 등에 utility(기능)를 제공하는 역할을 한다.

// class Cat {
//     constructor(name, months) {
//         this.name = name;
//         this.months = months;
//     }

//     // static 속성
//     static description = "고양이는 18개월 이상이 되면 성체가 됩니다."

//     // static 메서드
//     static isAdult(months) {
//         if (months < 18) {
//             return "아기 고양이"
//         } else {
//             return "성체 고양이"
//         }
//     }
// }

// const cat = new Cat("kitty", 12);
// console.log(cat);

// Cat의 instance에서 static 속성과 static 메서드를 호출할 수 없다.
// console.log(cat.description); // undefined
// console.log(cat.isAdult()); // cat.isAdult is not a function : 정의되지 않았기에 호출불가

// Cat class가 자체적으로 호출
// Cat class or Cat class의 instance 등에 utility를 제공한다.
// console.log(Cat.description); // 고양이는 18개월 이상이 되면 성체가 됩니다.
// console.log(Cat.isAdult(cat.months)); // 아기고양이

// static 메서드로만 이루어진 class
// class Calculator {
//     static add(a, b) {
//         return a + b;
//     }
//     static subtract(a, b) {
//         return a - b;
//     }
//     static multiply(a, b) {
//         return a * b;
//     }
//     static divide(a, b) {
//         return a / b;
//     }
// }

// console.log(Calculator.add(1,2));
// console.log(Calculator.subtract(1,2));
// console.log(Calculator.multiply(1,2));
// console.log(Calculator.divide(1,2));

//--------------------------------------------

// # JavaScript의 미리 정해진 class(builtin Class)
// 종류
// 문자 처리: String
// 숫자 및 날짜: Number, Math, Date
// Indexed collections: Array
// error : Error, SyntaxError, ReferenceError, TypeError, ...
// etc : Promise, JSON

// builtin class의 instance 만들기
// 부제: JavaScript에서 모든 data는 Object(객체)이다.

// const foo = new String("bar");

// console.log(foo);
// console.log(typeof foo); // object

// String class의 instance를 literal 표기법을 이용해 생성
// foo변수는 메서드와 속성을 Sting으로부터 상속받았다.
// const foo = "bar"; // literal 표기법 (class를 호출하지 않고 값을 정의한다.)
// console.log(foo);
// console.log(typeof foo);

// console.log("foo".toUpperCase());

// const num = new Number(2);
// console.log(num); // Number: 2
// console.log(typeof num); // object

// const num = 2;
// console.log(num); // 2
// console.log(typeof num); // number -> object

// const date = new Date(); // literal이 안된다.                                                                                                                                                                                                                                                                                  
// console.log(date);

// const bool = new Boolean(true);
// const bool = true;

// const arr = new Array("foo", "bar", "baz"); // array : 한 개 이상의 value를 가진 상태
// const arr = ["foo", "bar", "baz"] // literal
// console.log(arr);

// const o = new Object({foo: "bar"});
// const o = {foo: "bar"} // literal
// console.log(o);

// Math의 static 속성 'PI'
// const pi = Math.PI; // Math는 이름 그대로 수학과 관련된 속성이 많다.
// console.log(pi);

// Error class는 다양한 종류의 Error의 instance 생성에 사용된다.
// const err = new Error("Something's broken!"); // Error는 literal이 안된다.
// console.log(err);
// console.log(err.name); // Error <- Error instance의 이름은 class와 동일
// console.log(err.message); // Something's broken!

// ☆ builtin class의 instance로 custom Error 발생시키기

//사용자가 정의한 함수 f
// function f(data) { // data는 전달받는 인자
//     if (typeof data !== "string") { // -> 전달받는 data가 string이 아니면
//         // throw: custom Error
//         // TypeError(): builtin class의 instance를 사용했다.
//         throw new TypeError("인자는 문자여야만 합니다.");
//     }

//     // throw 아래 코드는 실행되지 않는다. -> Error가 발생하면
//     console.log("인자:", data);
// }

// try {
//     // f함수를 호출했다.
//     f(2);
// } catch (err) {
//     console.error(err);
// }

// --------------------------------------------------------------
// Q. 빌트인 클래스인 RangeError의 인스턴스를 사용해서
// 15세 소녀가 cu에서 술을 사려고 하는 것을
// 막아보세요

// function girl(age) {
//     if (age <= 18) {
//         throw RangeError("No, only adult!");
//     }
//     console.log("You can!");
// }

// try {
//     girl(15);
// } catch(err) {
//     console.error(err);
// }

// 강사풀이 ------------------------------------------------------------

// try {
//     const age = 15;

//     console.log("15세 소녀가 술을 사러 cu에 가고 있다.");

//     if (age < 18) {
//         const err = new RangeError("3년 뒤에 오세요")
//         // throw: custom Error를 발생시킨다.
//         throw err
//     }

//     console.log("15세 소녀가 술을 사는데 성공했다!");
// } catch(err) {
//     console.error(err);
// }

// --------------------------------------------------------------------

// # builtin class의 instance들의 속성과 메서드 사용하기

// String

// const foo = "bar";
// console.log(foo.length); // 문자열의 길이
// console.log(foo.toUpperCase()); // 대문자로 만든다.
// console.log(foo.toLowerCase()); // 소문자로 만든다.
// console.log(foo.split("a")); // 인자를 기준으로 문자열을 분할하여 Array의 형태로 return한다.
// console.log(foo.replace("r","z")); // .replace(a, b): 문자열 중에 a를 b로 대체한다.

// Number

// const year = 2022;
// console.log(year); // type is Number
// console.log(year.toString()); // Number type을 String으로 변환
// console.log(year.toString(2)); // -> 2진법으로 변환 toString(기수): 해당하는 기수법으로 변환한다.
// console.log(year.toPrecision(10)); // 정밀도, 숫자의 개수를 인자에 맞게 출력한다.
// console.log(Number.isNaN(year)); // NaN(Not a Number) isNaN(인자): 인자가 NaN인지 판별

// Math

// console.log(Math.random()); // 0에서 1사이의 소수를 return한다.
// console.log(Math.PI); // Pi
// console.log(Math.round(0.5)); // 반올림
// console.log(Math.round(0.4)); // 반올림
// console.log(Math.ceil(0.5)); // 올림
// console.log(Math.ceil(0.4)); // 올림
// console.log(Math.floor(0.5)); // 내림
// console.log(Math.floor(0.6)); // 내림
// console.log(Math.pow(2,7)); // 거듭제곱 (square root)
// console.log(Math.sqrt(16)) // 제곱근
// console.log(Math.max(10, 100)); // 최대값
// console.log(Math.min(10, 100)); // 최소값

//Date

// const date = new Date();
// console.log(date); // GMT 시간 (그리니치 평균시)
// console.log(date.toLocaleString()); // 현지시간 = date with time (String type으로 출력)
// console.log(date.toLocaleTimeString()); // 현지 시간만 출력 = only time (String Type)

// Array

// const arr = ["foo", "bar"];
// console.log(arr);

// arr.push("baz"); // 새로운 item을 마지막에 추가한다.
// console.log(arr);

// const arr = ["foo", "bar", "baz"];

// arr.pop(); // Array의 마지막 item을 제거
// console.log(arr);

// const arr = ["foo", "bar", "baz"];

// const r = arr.slice(1, 2); // slice(start, end) end는 생략가능
// // slice 메서드는 새로운 Array를 return한다.
// r.push("call"); // ["bar", "call"]

// console.log(r);

// const r = arr.slice(1);
// console.log(r); // ["bar", "baz"]

// const arr = ["foo", "bar", "baz"];

// const r = arr.sort(); // 기본형으로 사용할 때는 String Array에만 정상적으로 작동한다.

// console.log(r); // 알파벳 순서대로 정렬

// const arr = [100, 25];

// const r = arr.sort(); // 100과 25를 문자열로 변환한 뒤 비교하여 정렬한다.
// console.log(r); // [100, 25] 정상작동 X

// const arr = [20, 10, 30];

// const r = arr.sort(function (a, b) {
//     return a - b;
// })

// console.log(r);

// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];
// const arr3 = arr1.concat(arr2); // arr1.concat(arr2) arr1 뒤에 arr2를 연결한다.

// console.log(arr3); // ["foo", "bar", "baz"] -> Good
// console.log(arr1 + arr2); // foo, barbaz -> Bad

// -------------------------------------------------------
// Q. slice 메서드를 사용해서 b부터 f로 구성된 Array를 만들어라. -> perfect complete
// const arr = ["a", "b", "c", "d", "e", "f", "g"];

// const r = arr.slice(1,6);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop(0);
// console.log(arr);
// console.log(r);

// =======================================================

// 2022-09-19

// ===================================================

// map()
// const arr = ["foo", "bar", "baz"];

// // map(callback)
// // callback에 배열의 value, index, array를 인자로 전달한다.
// // Array를 순회하면서 item에 특정한 메서드를 적용할 수 있다.
// // 새로운 Array(r)를 return한다.
// const r = arr.map(function (value, index, array) {
//     return value.toUpperCase(); // toUpperCase(); : 문자열(Alphabet)을 대문자로 만든다.
// })

// console.log(arr);
// console.log(r); 

// const arr = [1, 2, 3, 4];

// const r = arr.map(function (value){  // index, array는 삭제가능
//     return value * 10;
// })

// console.log(arr);
// console.log(r);

// filter()
// const arr = ["foo", "bar", "baz"];

// // Array를 순회하며 특정한 조건에 맞는 value로 구성된 새로운 Array를 return한다.
// const r = arr.filter(function (value, index, array) {
//     if (value.charAt(0) === "b") { // charAt(index) : 문자열에서 index에 해당하는 문자를 return한다.
//         return value;
//     }
// })

// console.log(arr); // ['foo', 'bar', 'baz']
// console.log(r); // ['bar', 'baz']

// Object
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};
// // Object의 key로 이루어진 Array를 return한다.
// const r = Object.keys(o);
// const v = Object.values(o);

// console.log(o); // [prop1: 'foo', prop2: 'bar', prop3: 'baz']
// console.log(r); // key를 return ['prop1', 'prop2', 'prop3']
// console.log(v); // value를 return ['foo', 'bar', 'baz']

// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};

// // key와 value 쌍을 array의 형태로 return한다.
// const r = Object.entries(o);

// console.log(o);
// console.log(r);

// const arr = [1, 2, 3, 4, 5];

// const r = arr.filter(function (value, index) {
//     if (value > 2) {
//         return value;
//     }
// })

// console.log(r);

// ---------------------------------------------
// Q.
// 1. origin으로만 구성된 Array를 만들어보세요. (map)
// 2. 유럽 맥주로만 구성된 Array를 만들어보세요. (filter)

// const beers = [
//     { name: "Heineken", origin: "Netherland"},
//     { name: "Kloud", origin: "S.Korea"},
//     { name: "Guinness", origin: "Ireland"},
//     { name: "Asahi", origin: "Japan"}
// ];

// console.log(beers);

// const O = beers.map(function (value) {
//     return value.origin;
// })

// console.log(O);

// const Europe = beers.filter(function (value) {
//     if (value.name === "Heineken") {
//         return value.name;
//     }
// })

// console.log(Europe);

// 강사풀이 ---------------------------------------

// const origins = beers.map(function (beer) {
//     return beer.origin;
// })
// console.log("World beers from", origins);

// const europeanBeers = beers.filter(function (beer) {
//     if (beer.origin === "Netherland" || beer.origin === "Ireland") {
//         return beer;
//     }
// })
// console.log("European beers", europeanBeers);

// ------------------------------------------------

// # Destructing assignment (구조분해 할당)
// Array: Array의 item들을 개별적으로 변수에 담을 수 있게 한다.
// Object: Object의 속성들을 개별적으로 변수에 담을 수 있게 한다.

// Array []
// const arr = ["foo", "bar", "baz"];
// console.log(arr);

// 기존의 방법
// Array의 item들을 개별적으로 변수에 담았다. -> index를 이용해 Array의 item에 접근
// const item0 = arr[0];
// const item1 = arr[1];
// const item2 = arr[2];

// console.log(item0);
// console.log(item1);
// console.log(item2);

// const arr = ["foo", "bar", "baz"];

// // 기존의 방법보다 단순해진 문법 -> 문법이기에 복잡한 작업 불가
// const [item0, item1, item2] = arr;

// console.log(item0);
// console.log(item1);
// console.log(item2);

// function calculator(x, y) {
//     return [x + y, x - y, x * y, x / y];
// }

// 각각의 item들을 개별적으로 변수에 담음.
// 변수의 개수와 item의 개수가 같아야한다.
// 변수와 item들의 순서 또한 중요하다.
// const [add, substract, multiply, divide] = calculator(1, 2);
// console.log(calculator(1,2));

// console.log("add", add);
// console.log("substract", substract);
// console.log("multiply", multiply);
// console.log("divide", divide);

// const beers = [
//     { name: "Heineken", origin: "Netherland"},
//     { name: "Kloud", origin: "S.Korea"},
//     { name: "Guinness", origin: "Ireland"},
//     { name: "Asahi", origin: "Japan"}
// ]

// const [DeutchBeer, KoreanBeer, IrishBeer, JapaneseBeer] = beers;

// console.log("독일맥주", DeutchBeer);
// console.log("한국맥주", KoreanBeer);
// console.log("아일랜드맥주", IrishBeer);
// console.log("일본맥주", JapaneseBeer);

// var DB, KB, IB, JB;
// [DB, KB, IB, JB] = ["Heineken", "Kloud", "Guinness", "Asahi"];
// console.log("독일 :", DB);
// console.log("한국 :", KB);
// console.log("아일랜드 :", IB);
// console.log("일본 :", JB);

// Object {}
// property : 속성
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};

// // Object의 속성들을 변수에 담았다.
// // key 값으로 속성에 접근했다.
// // 속성들의 value를 변수에 담았다.
// const prop1 = o.prop1;
// const prop2 = o.prop2;
// const prop3 = o.prop3;

// console.log(prop1); // foo
// console.log(prop2); // bar
// console.log(prop3); // baz

// 문법의 단순화

// const {prop1, prop2, prop3} = o;

// console.log(prop1);
// console.log(prop2);
// console.log(prop3);

// 함수에서 Destructing 사용하기

// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};

// // 함수의 인자로 들어간 것 이외에 달라진 것 없음.
// // 변함없이 key 값으로 속성에 접근을 한다.
// f(o); // -> hoisting : 함수호출을 함수선언식보다 미리 작성하는 법
// function f(props) { // props = properties
//     // 여기서의 변수 이름은 key 값의 이름과 일치할 필요가 없다.
//     const prop1 = props.prop1;
//     const prop2 = props.prop2;
//     const prop3 = props.prop3;

//     console.log(prop1);
//     console.log(prop2);
//     console.log(prop3);
// }

// 단순해진 문법

// f(o);
// 인자에 들어갈 key의 이름과 일치해야함.
// function f({prop1, prop2, prop3}) {
//     console.log(prop1);
//     console.log(prop2);
//     console.log(prop3);
// }

// -------------------------------------------------
// Q1. 다음과 같은 문장을 출력하는 함수를 정의해보세요. (구조분해할당을 사용하여 함수 파라미터를 정의)
// Guiness is originated in the brewery at lreland.

// const IrishBeer = { name: "Guinness", origin: "Ireland"}
// console.log(IrishBeer);

// Sentence(IrishBeer);
// function Sentence({name, origin}) {
//     console.log(name);
//     console.log(origin);
//     console.log(name + " is originated in the brewery at " + origin);
// }

// 강사풀이 ----------------------------------------------

// f(IrishBeer);
// function f({name, origin}) {
//     console.log(name + " is originated in the brewery at " + origin);
// }

// -------------------------------------------

// Q2. 원산지에 일치하는 맥주이름의 변수를 만들어보세요. (구조분해할당 사용)

// const origins = ["Netherland", "S.Korea", "Ireland", "Japan"];

// const [Heineken, Kloud, Guinness, Ashai] = origins;

// console.log("Heineken :", Heineken);
// console.log("Kloud :", Kloud);
// console.log("Ireland :", Guinness);
// console.log("Ashai :", Ashai);

// 강사풀이 ------------------------------------------------

// const [Heineken, Kloud, Guinness, Ashai] = origins;
// console.log(Kloud);

// ----------------------------------------------------

// 2022-09-21

// ===============================================

// # Spread Syntax (전개 구문) - 문법
// Array : Array의 item을 간단하게 복사할 수 있다.
// Object : Object의 속성을 간단하게 복사할 수 있다.
// ...Array의 이름

// Array
// push()와 기능은 비슷하다.
// const arr = ["foo", "bar"];
// const r = [...arr, "baz"]; // -> 새로운 Array로 생성

// console.log(arr); // ['foo', 'bar']
// console.log(r); // ['foo', 'bar', 'baz']

// concat(): concatenation(연결)과 비슷
// const arr1 = ["foo", "bar"];
// const arr2 = ["baz"];

// const r = [...arr1, ...arr2]; // 다른 Array끼리 합치기 가능
// console.log(r); // ['foo', 'bar', 'baz']

// const r = [...arr2, ...arr1];
// console.log(r); // ['baz', 'foo', 'bar']

// slice()와 비슷
// const arr = ["foo", "bar", "baz"];

// const [item0, ...rest] = arr; // Distructing과 같이 사용
// console.log(item0); // foo
// console.log(rest); // ['bar', 'baz'] rest는 나머지 Array를 return한다. 굳이 rest가 아니어도 된다.

// -----------------------------------------------
// Q1. Spread 문법을 사용하여 일본 맥주를 추가해보세요.

// const beers = [
//     {name: "Heineken", origin: "Netherlands"},
//     {name: "Kloud", origin: "S.Korea"},
//     {name: "Guinness", origin: "Ireland"}
// ];

// const japaneseBeer = {name: "Asahi", origin: "Japan"};

// console.log([...beers, japaneseBeer]);

// const f = [...beers, japaneseBeer]; // japaneseBeer는 Array가 아니기에 ...을 붙이면 안된다.
// console.log(f);

// ----------------------------------------------

// Object

// 속성 update
// const o = {prop1: "foo", prop2: "bar", prop3: "baz"};
// console.log(o); // {prop1: 'foo', prop2: 'bar', prop3: 'baz'}
// const r = {...o, prop2: null}; // ...o: 기존 Object의 속성들
// console.log(r); // {prop1: 'foo', prop2: null, prop3: 'baz'}

// 속성 추가
// const o = {prop1: "foo", prop2: "bar"};
// const r = {...o, prop3: "baz"};
// console.log(o); // {prop1: 'foo', prop2: 'bar'}
// console.log(r); // {prop1: 'foo', prop2: 'bar', prop3: 'baz'}

// -----------------------------------------
// Q2. dutchBeer에 현재 이용가능한 맥주인지를 나타내는 새로운 속성
// available: true를 추가해보세요.
// (Object의 Spread 문법 사용)

// const dutchBeer = {name: "Heineken", origin: "Netherlands"};

// const DutchBeer = {...dutchBeer, abailable: true};

// console.log({...dutchBeer, available: true}); // Object에 새로운 속성을 추가할 시 {}를 사용해야한다.
// console.log(DutchBeer);

// ----------------------------------------------
// Q3. 기네스 맥주가 재입고가 되었다.
// Guinness 맥주의 available의 값을 true로 바꾸어보세요.
// map() 메서드와 Spread 문법을 사용

// const beers = [
//     {name: "Heineken", origin: "Netherlands", available: true},
//     {name: "Kloud", origin: "S.Korea", available: true},
//     {name: "Guinness", origin: "Ireland", available: false}
// ]

// map(callback) callback 내에서도 if/else 사용 가능

// const f = beers.map(beer => { // beers -> Array를 나타낸다.
//     if (beer.available == false) { // beer는 beers의 item
//         return {...beer, available: true}
//     }
//     return beer;
// })

// console.log(f);

// 강사풀이 ---------------------------------------------------------

// const r = beers.map(beer => {
//     return {...beer, available: true}
// })
// console.log(r);

// const r = beers.map(function (beer) {
//     return {...beer, available: true}
// })
// console.log(r);

// const r = beers.map(beer => {
//     if (beer.name == "Guinness") {
//         return {...beer, available: true}
//     }
//     return beer;
// })

// console.log(r);

// const r = beers.map(beer => {
//     beer.available = true
//     return beer;
// })
// console.log(r);

// const f = beers.map(function (beer) {
//     beer.available = true
//     return beer;
// })
// console.log(f);

// -----------------------------------------------------------

// # JavaScript 비동기(Asynchronous) 프로그래밍
// 작업 과정(코드 실행 과정)에서 Blocking(막힘)을 다루기 위한 방법
// ex) 서버로부터 데이터를 요청하는 것과 그에 대한 처리

// function f(callback) {
//     callback()
// }

// // f함수는 동기(synchronous)함수이다.
// // 호출된 순서대로 실행된다.
// f(() => {
//     console.log("foo");
// })
// console.log("bar");

// setTimeout(callback, ms) : ms 후에 callback 실행
// setTimeout(() => {
//     console.log("foo");
// }, 1000)
// console.log("bar");

// setTimeout(): 대표적인 비동기 함수이다.
// 비동기함수는 가장 마지막에 실행된다.
// console.log("baz");
// setTimeout(() => {
//     console.log("foo")
// }, 1000)
// console.log("bar");

// real world 예제
// 서버에게 데이터 요청하기

// 비동기 함수
// 서버에 데이터를 요청하는 함수이다.
// function fetchData(callback) {
//     const o = {foo: "bar"};

//     setTimeout(() => {
//         callback(o)
//     }, 1000)
// }

// // 데이터를 가져오는데 1초가 걸린다고 가정
// fetchData(data => { // data = callback => {foo: "bar"}
//     console.log("data", data) // data {foo: 'bar'}
// })

// console.log("다른 작업");

// 비동기에서 에러 다루기
// 서버에 데이터 요청하는 예제

// function fetchData(id, callback) { // 2. id에 null이 전달
//     if (!id) { // !id(id가 없을때) => id === null // !null = true // !undefined = true // !"" = true 
//         const err = new Error("id is required"); // 3. id가 null이므로 Error Object를 생성

//         setTimeout(() => {
//             callback(err, null) // 4. callback에 err와 null을 전달
//         }, 0)
//         return;
//     }

//     const o = {foo: "bar"};

//     setTimeout(() => {
//         callback(null, o)
//     })
// }

// // fetchData() 함수 호출
// fetchData(null, (err, data) => { // 1. null과 err, data 인자를 전달
//     if (err) {
//         throw err; // 5. err가 있기에 const err를 throw한다.
//     }
//     console.log("data", data);
// })

// ==================================================================

// 2022-09-26

// ===================================================================

// function f(callback) {
//     callback()
// }

// f(() => { // 동기(synchronous)함수 : 호출된 순서대로 실행된다.
//     console.log("foo"); // first return -> foo
// })
// console.log("bar"); // second return -> bar

// function f(callback) {
//     setTimeout(() => {
//         callback()
//     }, 0)
// }

// f(() => { // f는 비동기(asynchronous)함수 : 호출순서와 상관없이 가장 마지막에 실행된다.
//     console.log("foo"); // second return -> foo
// })
// console.log("bar"); // first return -> bar

// 실제 사용예시

// function fetchData(callback) {
//     const o = {foo: "bar"}

//     setTimeout(() => {
//         callback(o)
//     }, 1000)
// }

// fetchData((data) => { // fetchData : 비동기함수 // 서버에 데이터 요청
//     console.log("data", data); // second return
// }) // ex) youtube 새로고침 시 어떻게 사용되는지 파악할 수 있다.
// console.log("다음 작업"); // first return

// 비동기 함수에서 에러 처리

// function fetchData(id, callback) {
//     if (!id) {
//         const err = new Error("id is required");

//         setTimeout(() => {
//             callback(err, null);
//         }, 0)
//         return;
//     }

//     const o = {foo: "bar"};

//     setTimeout(() => {
//         callback(null, o);
//     }, 0) 
// }

// // 서버에 데이터를 요청함
// fetchData(null, (err, data) => {
//     try {
//         if (err) {
//             throw err;
//         }
//         console.log("data", data);
//     } catch(error) {
//         console.error(error);
//     }
// })

// ---------------------------------------------

// # Promise
// Promise 객체는 비동기 작업의 성공/ 실패 여부와 그 결과값을 나타낸다.
// 비동기 작업의 가독성을 높이기 위해 사용된다.

// 구조
// Promise class를 이용하여 인스턴스 만들기

// const o = new Promise((res, rej) => {
//     // res: resolve(fullfilled)
//     // 비동기 작업의 성공
//     // res("foo")

//     // rej: rejected
//     // 비동기 작업의 실패
//     rej("bar")
// })
// console.log(o); // Promise {<pending>} -> 보류중 : 결과값이 정해지지 않았을 때 나오는 return값
//                 // 상태: fullfilled, 결과값: "foo"
//                 // 상태: rejected, 결과값: "bar" 

// astnc function을 사용해서 인스턴스 만들기

// async function f() {
//     // resolve(fullfilled)
//     // 비동기 작업의 성공
//     // return "foo"

//     // rejected
//     // 비동기 작업의 실패
//     throw "bar"
// }

// console.log(f()); // 상태: fullfilled, 결과값: "foo"
//                   // 상태: rejected, 결과값: "bar"

// 실제 사용예시
// 에러처리에 분리할 수 있다는 장점이 있다.
// async function fetchData() {
//     const o = {foo: "bar"};
//     return o;
// }

// // 서버에 데이터를 요청한다.
// fetchData() // Promise 객체는 비동기적으로 작동한다.
// .then(data => { // <- .then은 Promise의 메소드이다. .then 메소드의 callback 안에서 데이터를 처리한다.
//     console.log(data); // second return
// })

// console.log("다음 작업"); // first return

// Promise 객체에서 에러 처리
// 데이터 처리와 error처리를 분리함에 있어서 가독성이 좋아짐. => 코드의 간결화
// async function fetchData(id) {
//     if (!id) {
//         const err = new Error("id is required");
//         throw err;
//     }

//     const o = {foo: "bar"};
//     return o;
// }

// // 서버에 데이터를 요청
// // Promise를 사용한 방법
// fetchData(null)
// .then(data => { // 데이터를 처리한다.
//     console.log("data", data);
// })
// .catch(err => { // error 처리
//     console.error(err);
// })

// // 비동기함수를 사용한 방법
// fetchData(null, (err, data) => {
//     try {
//         if (err) {
//             throw err;
//         }
//         console.log("data", data);
//     } catch(error) {
//         console.error(error);
//     }
// })

// Promise의 async/await 문법
// 비동기 작업을 동기 작업처럼 할 수 있게 만든다.
// 가독성면에서 가장 좋다.

// async function fetchData(id) {
//     if (!id) {
//         const err = new Error("id is required");
//         throw err;
//     }

//     const o = {foo: "bar"};
//     return o;
// }

// f()
// async function f() {
//     try {
//         // await: 비동기작업이 끝날 때까지 기다린다. 결과값이 나올때까지 기다린다.
//         // await은 async 함수 내부에서만 사용가능
//         const data = await fetchData(null);
//         console.log(data);

//         console.log("다음 작업");

//     } catch (error) {
//         console.error(error);
//     }
// }

// -----------------------------------------------------------------------

// # JSON
// JavaScript Object Notation (JavaScript 객체 표기법)
// JavaScript 객체를 저장하거나 전송하기 위한 "텍스트" 포맷

// const o = {foo: "bar"};
// const json = '{"foo": "bar"}'

// console.log(o); // Object
// console.log(json); // json 포맷(텍스트) 
// console.log(typeof json); // String(문자열)

// const o = {foo: "bar"};
// // JSON.stringfy(): Object를 json 포맷으로 변환한다.
// const r = JSON.stringify(o);

// console.log(r);

// JSON.stringfy()를 간결하게 쓸 수도 있다.
// const a = JSON.stringify({foo: "bar"});
// console.log(a);

// const json = '{"foo": "bar"}';
// // JSON.parse(json): json포맷을 Object로 변환
// const r = JSON.parse(json);
// console.log(r);
// console.log(typeof r) // object

// const r = JSON.parse(a);
// console.log(r);

// const arr = '[{"prop1": "foo", "prop2": "bar"}]';

// const r = JSON.parse(arr);
// console.log(r);






































































































































