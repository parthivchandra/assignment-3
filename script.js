let btn = document.getElementById("btn");
btn.onclick = function () {
    let link1 = document.getElementById("link1");
    let link2 = document.getElementById("link2");
    let temp = link1.href;
    link1.href = link2.href;
    link2.href = temp;
};