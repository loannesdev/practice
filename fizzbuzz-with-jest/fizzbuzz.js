function fizzbuzz(num) {
    const divisible = (num, div) => num % div == 0;

    if (divisible(num, 3) && divisible(num, 5)) {
        return "fizzbuzz";
    }

    if (divisible(num, 3)) {
        return "fizz";
    }

    if (divisible(num, 5)) {
        return "buzz";
    }

    return num;
}

function Aux(num) {
    for (let i = 1; i < num; i++) {
        console.log(`${i}: ${fizzbuzz(i)}`);
    }
}

Aux(16);

module.exports = fizzbuzz;