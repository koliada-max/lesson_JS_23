
let firstNum = parseInt(
    prompt("Plese enter first number"),
);
let secondNum = parseInt(
    prompt("Plese enter secnd number"),
);

let a = firstNum;
let b = secondNum;
while (a !== 0 && b !== 0) {
    if (a > b) {
        a = a % b;
} else {
    b = b % a;
    }
}

console.log(`The GCD of numbers ${firstNum} and ${secondNum} = ${a + b}`);
