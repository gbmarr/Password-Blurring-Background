const bgBlurr = document.getElementById("background");
const txtPass = document.getElementById("txtPassword");

txtPass.addEventListener("input", (e)=> {
    let input = e.target.value;
    let txtLength = input.length;
    let blurValue = 20 - txtLength * 2;
    bgBlurr.style.filter = `blur(${blurValue}px)`;
})