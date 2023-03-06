function getFibonacci(number) {
    if (number <= 2) {
        return 1;
    }
    else {
        return getFibonacci(number - 1) + getFibonacci(number - 2);
    }
}
var fibonacciList = 9;
var sumFibonacci = 0;
for (var i = 1; i <= fibonacciList; i++) {
    console.log(getFibonacci(i));
    sumFibonacci += getFibonacci(i);
}
console.log("Tong cac so Fibonacci: " + sumFibonacci);
