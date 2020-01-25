const toggle = document.querySelector(".btn");
toggle.addEventListener("click", changePricing);

function changePricing() {
    let basic = document.querySelector('#basic');
    //let basicChange = basic.textContent.slice(3, basic.textContent.length);
    //console.log(Math.floor((basicChange * 10)).toFixed(2) + (0.99))
    let prof = document.querySelector('#prof');
    let master = document.querySelector('#master');


    if (basic.textContent === "$19.99") {
        basic.textContent = "$199.99";
    } else {
        basic.textContent = "$19.99";
    }

    if (prof.textContent === "$24.99") {
        prof.textContent = "$249.99";
    } else {
        prof.textContent = "$24.99";
    }

    if (master.textContent === "$39.99") {
        master.textContent = "$399.99";
    } else {
        master.textContent = "$39.99";
    }
}

// to do
// refactor changePricing