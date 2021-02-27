let num = 0;
let positive = 0;
let negative = 0;
let zero = 0;
let even = 0;
let notEven = 0;

for (let i = 1; i < 11; i++) {
    num = + (prompt('Enter a number:'));
    
    console.log(num);
    
    if (num > 0) {
        positive = positive + 1;
}
    if (num < 0) {
        negative = negative + 1;
}
    if (num === 0) {
        zero = zero + 1;
}
    if ((num % 2) === 0) {
        even = even + 1;
} else {
        notEven = notEven + 1;
}
}

console.log(`Positive: ${positive}`);
console.log(`Negative: ${negative}`);
console.log(`Zero: ${zero}`);
console.log(`Even: ${even}`);
console.log(`Not Even: ${notEven}`);

