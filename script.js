const container = document.querySelector('#container');
let divs = new Array();
for (let i=0;i<256;i++) {
    divs[i] = document.createElement('div');
    divs[i].style.cssText = "border: 1px solid black; height: 15px; padding: 0; margin: 0";
    container.appendChild(divs[i]);
}