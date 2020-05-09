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

    //flip and unflip if necessassairy
    boxA.style.color = `blue`;

    bStatus = checkFlip(boxB, bStatus);
    cStatus = checkFlip(boxC, cStatus);
    dStatus = checkFlip(boxD, dStatus);
};

boxB.onclick = function bClick() {
    bStatus = Boolean(true);

    boxB.style.color = `blue`;
    boxB.style.transform = rotate(180);

    aStatus = checkFlip(boxA, aStatus);
    cStatus = checkFlip(boxC, cStatus);
    dStatus = checkFlip(boxD, dStatus);
};

boxC.onclick = function cClick() {
    cStatus = Boolean(true);

    boxC.style.color = `blue`;

    aStatus = checkFlip(boxA, aStatus);
    bStatus = checkFlip(boxB, bStatus);
    dStatus = checkFlip(boxD, dStatus);
};

boxD.onclick = function dClick() {
    dStatus = Boolean(true);

    boxD.style.color = `blue`;

    aStatus = checkFlip(boxA, aStatus);
    bStatus = checkFlip(boxB, bStatus);
    cStatus = checkFlip(boxC, cStatus);
};

function checkFlip(boxVal, box) {
    if (box == true) {
        boxVal.style.color = `black`;
        box = Boolean(false);
        return box;
    }
    return box;
}
