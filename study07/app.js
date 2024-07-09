// 모듈 사용하기
/***********************************************
 * 사용할 객체 : const model = {};
 ***********************************************/ 

/***********************************************
 * CommonJS : 사용법
 * 내보내기 : module.exports = model;
 * 가져오기 : const model = require("경로 + 파일");
 ***********************************************/ 
//const model = require("./data1.js");

/***********************************************
 * ES6 : 사용법
 * 내보내기 : export default model;
 * 가져오기 : import model from "";
 ***********************************************/
import model from "./data1.js"; 

// 데이터 확인
//console.log(model);
/*
let html = "";
for(let y = 0; y < model.length; y++) {
    let temp = "";
    for(let x = 0; x < model[y].length; x++) {
        temp += `<div class="${(model[y][x] == 1) ? "bg1" : "bg2"}"></div>`;
    }
    html += `<li>${temp}</li>`;
}

let html2 = "";
for(let y = 0; y < model.length; y++) {
    let temp = "";
    for(let x = 0; x < model[y].length; x++) {
        temp += `<div class="${(model[y][x] == 1) ? "bg2" : "bg1"}"></div>`;
    }
    html2 += `<li>${temp}</li>`;
}
*/
const dataEvent = (type) => {
    let html = "";
    for(let y = 0; y < model.length; y++) {
        let temp = "";
        for(let x = 0; x < model[y].length; x++) {
            if(type) {
                temp += `<div class="${(model[y][x] == 1) ? "bg1" : "bg2"}"></div>`;
            } else {
                temp += `<div class="${(model[y][x] == 1) ? "bg2" : "bg1"}"></div>`;
            }            
        }
        html += `<li>${temp}</li>`;
    }
    return html;
}

const ul = document.getElementsByTagName("ul")[0];
//ul.innerHTML = html;
ul.innerHTML = "";

const btnEvent = (e) => {
    //console.log(this, e, e.target, e.target.id);
    switch (e.target.id) {
        case "1":
            ul.innerHTML = "";
            break;
        case "2":
            ul.innerHTML = dataEvent(true);
            break;
        default:
            ul.innerHTML = dataEvent();
            break;
    }
}

const btns = document.getElementsByTagName("button");
for(let btn of btns) {
    //console.log(btn);
    btn.onclick = btnEvent;
}
/*
btns[0].onclick = function() {
    ul.innerHTML = "";
}
btns[1].onclick = function() {
    ul.innerHTML = html;
}
btns[2].onclick = function() {
    // 기능 부여
}
*/