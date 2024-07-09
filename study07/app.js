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
const btnEvent = (e) => {
    switch (e.target.id) {
        case "1":
            ul.innerHTML = "";
            break;
        case "2":
            ul.innerHTML = dataEvent(true);
            pointEvent();
            break;
        default:
            ul.innerHTML = dataEvent();
            pointEvent();
            break;
    }
}
const btns = document.getElementsByTagName("button");
for(let btn of btns) {
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

let history = [0];
const pointEvent = () => {
    let div = document.getElementsByTagName("div");
    div[history[0]].className += " bg3";
    //console.log(history[1]);
    if(history[1] != undefined) {
        let styles = div[history[1]].className.split(" ");
        //console.log(styles);
        div[history[1]].className = styles[0];
    }
};
window.addEventListener("keydown", (e) => {
    let point = history[0];
    switch (e.keyCode) {
        case 37: // 왼쪽 : 0 이하는 이동 불가
            if(point > 0) history = [point - 1, point];
            break;
        case 38: // 위쪽 : 4 이하는 이동 불가
            if(point > 4) history = [point - 5, point];
            break;
        case 39: // 오른쪽 : 24 이상은 이동 불가
            if(point < 24) history = [point + 1, point];
            break;
        case 40: // 아래쪽 : 20 이상은 이동 불가
            if(point < 20) history = [point + 5, point];
            break;
    }
    //console.log(history);
    pointEvent();
});