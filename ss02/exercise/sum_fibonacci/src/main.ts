function getFibonacci(number: number): number {
    if(number <= 2) {
        return 1;
    } else {
        return getFibonacci(number - 1) + getFibonacci(number - 2);
    }
}

let fibonacciList = 9;
let sumFibonacci = 0;
for (let i = 1; i <= fibonacciList; i++){
    console.log(getFibonacci(i));
    sumFibonacci += getFibonacci(i);
}
console.log("Tong cac so Fibonacci: " + sumFibonacci);