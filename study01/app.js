console.log("Study01 Javascript 시작!");

// node .\study01\app.js

var 정수 = 1;

let 조각 = 2;
const 상수 = 3;

function print() {
    console.log("출력");
}

print();  // 결과 : 출력

function print(a) {
    return a;
}

//console.log(print(정수)); // 결과 : 1

a = "값";

//console.log(a);

class Test {
    b = 1;
    #c = 2;
    constructor(a) {
        this.a = a;
    }
}

const test = new Test("이름");
//console.log(test, test.a);

const test2 = {
    a: 1,
    b: 2, 
    c: "삼"
};
//console.log(test2, test2.c);

//console.log(test, test2);

for(a in test2) {
    //console.log(a, test2[a]);
}

var {b} = test2;
//console.log("해당 변수명", b);

var {b:다른이름} = test2;
//console.log("다른 변수명", 다른이름);

for(a in test) {
    //console.log(a, test[a]);
}

var {b} = test;
//console.log("해당 변수명", b);

var {b:다른이름} = test;
//console.log("다른 변수명", 다른이름);

const test3 = {};

test3.a = 1;
test3.b = 2;

//console.log(test3);

const test4 = test3;
const test6 = {c: "삼"};
const test5 = {...test3, ...test6};

//console.log(test4, test5, test5.a);

function fn1() {
    console.log("fn1");
}

const fn2 = function() {
    console.log("fn2");
}

const fn3 = () => {
    console.log("fn3");
}
const fn4 = () => console.log("fn4");
/*
fn1();
fn2();
fn3();
fn4();
*/
function fn5(fn) { // 함수 변수를 매개변수로 받을 수 있다. (콜백함수)
    fn();  // 함수 호출
}
fn5(fn1);

fn5(() => {
    console.log("콜백 함수 내용입니다.");
});

const page1 = {
    select: () => console.log("page1.select"),
    insert: () => {},
    update: () => {},
    delete: () => {},
    selectList: () => {}
}
page1.select();
page1["select"]();