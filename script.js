let inputs = document.querySelectorAll("input");
let pw = document.querySelector("#pw");
let confirm = document.querySelector("#confirm");
let button =document.querySelector("button");


inputs.forEach (input => {
    input.addEventListener("invalid", e => {
        input.classList.add("required");
    });
});


let check = function () {
    if (pw.value != confirm.value) {
        pw.classList.add ("error");
        confirm.classList.add ("error");
        console.log ("AAA")
    } else {
        console.log("Yes!");
        pw.classList.remove ("error");
        confirm.classList.remove ("error");
    };
};
