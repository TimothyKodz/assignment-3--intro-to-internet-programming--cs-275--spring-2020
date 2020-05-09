let tagResults = document.getElementsByTagName(`tr`);
let table;

for (let x of tagResults) {
    table = x;
}

let boxA = table.firstElementChild;
let aStatus = new Boolean(false);
let boxB = boxA.nextElementSibling;
let bStatus = new Boolean(false);
let boxC = boxB.nextElementSibling;
let cStatus = new Boolean(false);
let boxD = boxC.nextElementSibling;
let dStatus = new Boolean(false);

boxA.onclick = function aClick() {
    aStatus = Boolean(true);

    boxA.style.color = `blue`;
    boxA.style.transform = `rotate(180deg)`;

    bStatus = checkFlip(boxB, bStatus);
    cStatus = checkFlip(boxC, cStatus);
    dStatus = checkFlip(boxD, dStatus);
};

boxB.onclick = function bClick() {
    bStatus = Boolean(true);

    boxB.style.color = `blue`;
    boxB.style.transform = `rotate(180deg)`;

    aStatus = checkFlip(boxA, aStatus);
    cStatus = checkFlip(boxC, cStatus);
    dStatus = checkFlip(boxD, dStatus);
};

boxC.onclick = function cClick() {
    cStatus = Boolean(true);

    boxC.style.color = `blue`;
    boxC.style.transform = `rotate(180deg)`;

    aStatus = checkFlip(boxA, aStatus);
    bStatus = checkFlip(boxB, bStatus);
    dStatus = checkFlip(boxD, dStatus);
};

boxD.onclick = function dClick() {
    dStatus = Boolean(true);

    boxD.style.color = `blue`;
    boxD.style.transform = `rotate(180deg)`;

    aStatus = checkFlip(boxA, aStatus);
    bStatus = checkFlip(boxB, bStatus);
    cStatus = checkFlip(boxC, cStatus);
};

function checkFlip(boxVal, box) {
    if (box == true) {
        boxVal.style.color = `black`;
        boxVal.style.transform = `rotate(0)`;
        box = Boolean(false);
        return box;
    }
    return box;
}
