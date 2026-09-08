console.log("Hello, World!");

console.log("Bem-vindos a terceira aula de Engenharia de Software II!");

function greet(name) {
    console.log(`Oi, tudo bem ${name}?`);
}

greet("Wagner");

function add(a, b) {
    return a + b;
}

const sum = add(5, 10);
console.log(`A soma de 5 e 10 é: ${sum}`);
console.log("Fim do programa.");

function fibonacci(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const fib = [0, 1];
        for (let i = 2; i < n; i++) {
            fib[i] = fib[i - 1] + fib[i - 2];
        }
        return fib;
    }
}

const n = 10;
const fibonacciSequence = fibonacci(n);
console.log(`A sequência de Fibonacci até ${n} é: ${fibonacciSequence.join(", ")}`);

console.log("Fim do programa.");