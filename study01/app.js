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

console.log(test, test2);

for(a in test2) {
    console.log(a, test2[a]);
}

var {b} = test2;
console.log("해당 변수명", b);

var {b:다른이름} = test2;
console.log("다른 변수명", 다른이름);