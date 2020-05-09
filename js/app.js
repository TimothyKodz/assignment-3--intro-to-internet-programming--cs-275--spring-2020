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
