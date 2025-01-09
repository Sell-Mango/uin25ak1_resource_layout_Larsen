console.log(resources);

let count = 0;

document.getElementById("domNav").innerHTML = resources.map(e => {
    return  `<li id="item${count++}">${e.category}</li>`;
}).join('');

