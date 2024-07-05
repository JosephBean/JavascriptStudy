/***************************************************
 * > 함수 4개를 만들기 : 더하기, 빼기, 나누기, 곱하기
 * > 문제 : 두개의 정수의 변수를 받아 함수를 실행하기.
 ***************************************************/
// 1. 두개의 정수값 변수
const 정수1 = 5;
const 정수2 = 6;

// 2. 함수 4개 만들기
function fn1(값1, 값2) {
    return (값1 + 값2);
}
const fn2 = function(값1, 값2) {
    return (값1 - 값2);
}
const fn3 = (값1, 값2) => {return (값1 / 값2);}
const fn4 = (값1, 값2) => (값1 * 값2);

// 3. 각각 함수 4개 호출하여 결과값 출력하기
console.log(`${정수1} + ${정수2} = ${fn1(정수1, 정수2)}`);
console.log(`${정수1} - ${정수2} = ${fn2(정수1, 정수2)}`);
console.log(`${정수1} / ${정수2} = ${fn3(정수1, 정수2)}`);
console.log(`${정수1} * ${정수2} = ${fn4(정수1, 정수2)}`);