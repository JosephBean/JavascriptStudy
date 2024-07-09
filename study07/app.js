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
let html = "";
for(let y = 0; y < model.length; y++) {
    //console.log(model[y]);
    let temp = "";
    for(let x = 0; x < model[y].length; x++) {
        //console.log(model[y][x]);
        // temp += "<div class='"
        // temp += (model[y][x] == 1) ? "bg1" : "bg2";
        // temp += "'></div>"
        temp += `<div class="${(model[y][x] == 1) ? "bg1" : "bg2"}"></div>`;
    }
    //html += temp;
    html += `<li>${temp}</li>`;
    //console.log(temp);
}
//console.log(html);

const ul = document.getElementsByTagName("ul")[0];
//console.log(ul);
ul.innerHTML = "";
ul.innerHTML = html;