// console.log(Number("1234"))

// 두 점수의 평균을 구하시오

// const MathScore = Number(prompt("수학 점수를 입력하세요"));
// const EngScore = Number(prompt("영어 점수를 입력하세요"));

// const aver = (MathScore + EngScore) / 2;

// alert(aver)

// function aver(num1,num2) {
//     return (num1 + num2) / 2;
// }

// result = aver(80,90);
// console.log(result);

// # 구구단 해보기

// for (let i=2; i<10; i++) {
//     console.log("## " + i + "times table ##");
//     for(let j=1; j<10; j++) {
//         console.log(i+"*"+j+"="+i*j);
//     }
// }

// try {
//     const girl = 15

//     if (girl < 20) {
//         const err = {
//             name: "돌아가",
//             message: "올 곳이 아니야"
//         }
//         throw err
//     }

// } catch (err) {
//     console.error(err);
// }

// try {
//     console.log("try 블록 시작");

//     console.log("try 블록 끝");
// } catch (err) {
//     console.log("에러가 없으므로, catch는 무시됩니다.");
// }

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

// let myHTML = document.querySelector('html');
// myHTML.onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

let mylmage = document.querySelector('img')

mylmage.onclick = function() {
    let mySrc = mylmage.getAttribute('src');
    if(mySrc === 'img/양계.jpg') {
        mylmage.setAttribute ('src','img/firefox2.png');
    } else {
        mylmage.setAttribute ('src', 'img/casper.jfif');
    }
}