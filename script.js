const container = document.querySelector('#container');
let divs = new Array();
const btn = document.querySelector('button');
function changeColor(e) {
    e.target.style.backgroundColor = "red";
}
function setGrid(divs, container) {
    divs.forEach(div => div.style.backgroundColor = "white");
    let grid = prompt("How many squares per side do you want in your new grid", "16");
    let sq = grid*grid;
    let leng = divs.length;
    if (leng < sq) {
        for (let i=leng; i<sq;i++) {
            divs[i] = document.createElement('div');
            divs[i].style.cssText = "border: 1px solid black; height:auto; padding: 0; margin: 0";
            divs[i].addEventListener('mouseenter', changeColor);
            container.appendChild(divs[i]);
        }
    } else if(leng>sq) {
        for (let i=sq;i<leng;i++) {
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
    divs[i].style.cssText = "border: 1px solid black; height:auto; padding: 0; margin: 0";
    divs[i].addEventListener('mouseenter', changeColor);
    container.appendChild(divs[i]);
}
btn.addEventListener('click', function () {
    setGrid(divs, container);
});