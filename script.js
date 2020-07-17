const container = document.querySelector('#container');
let divs = new Array();
const btn = document.querySelector('button');

function randomColor(e) {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = "rgb(" + r + "," + g + "," + b + ")";
    e.target.style.backgroundColor = color;
}

function changeColor(e) {
    if (document.getElementById('rainbow').checked) {
        randomColor(e);
    } else if (document.getElementById('black').checked) {
        e.target.style.backgroundColor = "black";
    } else {
        let style = window.getComputedStyle(e.target);
        let bgcolor = style.getPropertyValue('background-color');
        let patt = /^rgba\((\d),\s(\d),\s(\d),\s(\d\.?\d?)\)/;
        let result = bgcolor.match(patt);
        console.log(bgcolor);
        console.log(result);
        if(!(result[4]==0.9)) {
        result[4] = (result[4]*10+0.1*10)/10;
        e.target.style.backgroundColor = "rgba(0, 0, 0, " + result[4] + ")";
        }
    }
}
function setGrid(divs, container) {
    divs.forEach(div => div.style.backgroundColor = "rgba(0, 0, 0, 0.0)");
    let grid = prompt("How many squares per side do you want in your new grid", "16");
    let sq = grid * grid;
    let leng = divs.length;
    if (leng < sq) {
        for (let i = leng; i < sq; i++) {
            divs[i] = document.createElement('div');
            divs[i].style.cssText = "border: 1px solid grey; height:auto; padding: 0; margin: 0;";
            divs[i].style.backgroundColor = "rgba(0, 0, 0, 0.0)";
            divs[i].addEventListener('mouseenter', changeColor);
            container.appendChild(divs[i]);
        }
    } else if (leng > sq) {
        for (let i = sq; i < leng; i++) {
            let child = container.lastElementChild;
            container.removeChild(child);
            divs.pop();
        }
    }
    let str = "";
    for (let i = 0; i < Number(grid); i++) {
        str += "auto ";
    }
    console.log(str);
    container.style.cssText = `grid-template-columns: ${str};`;
}

for (let i = 0; i < 256; i++) {
    divs[i] = document.createElement('div');
    divs[i].style.cssText = "border: 1px solid grey; height:auto; padding: 0; margin: 0";
    divs[i].addEventListener('mouseenter', changeColor);
    container.appendChild(divs[i]);
}
btn.addEventListener('click', function () {
    setGrid(divs, container);
});