/***************************************************
 * 비동기 통신 방법 (Ajax)
 * https://www.w3schools.com/js/js_ajax_intro.asp
 ***************************************************/
import { $async, $get } from "./ajax.js";

const model = [
    "https://cdn.pixabay.com/photo/2023/06/14/06/22/cat-8062388_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/11/08/11/56/kitten-4611189_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/29/12/28/cats-8096304_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/02/26/16/32/bulldog-1224267_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/07/07/07/25/dog-7306691_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/02/18/13/03/cute-3162209_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/03/05/22/54/animal-1239398_1280.jpg",
    "https://cdn.pixabay.com/photo/2018/02/15/09/12/underwater-3154726_1280.jpg"
];

const view = (list) => {
    let html = "";
    for(let f of list) html += `<li><img src="${f.domain + f.path}"><p>${f.cnt}</p></li>`;
    document.getElementsByTagName("ul")[0].innerHTML = html;
    event(list);
}
const event = (list) => { // 이미지 이벤트 추가
    const lis = document.getElementsByTagName("li");
    for(let index = 0; index < lis.length; index++) {
        lis[index].onclick = () => $get(`http://lh/json/no/${list[index].no}/type/${list[index].type}`, {}, callBack);
    }
}
const callBack = data => {
    const res = JSON.parse(data.response);
    console.log(res);
    if(res.status) view(res.result);
}
for(let tag of document.getElementsByTagName("a")) {
    tag.onclick = (e) => {
        e.preventDefault();
        $get(`http://lh/json/type/${Number(tag.id)}`, {}, callBack);
    }
}