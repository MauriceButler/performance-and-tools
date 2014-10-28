// This version has the fewest lines of code - but is very slow.
// It checks if n is dividible by every integer 2, 3, 4, 5 ...
// up to sqrt(n)

function isPrime1(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) {
        return false;
    }

    var m=Math.sqrt(n);

    for (var i = 2;i <= m; i++) {
        if (n%i == 0) {
            return false;
        }
    }

    return true;
}

// The next version is better: it checks the divisor 2 separately;
// then, it proceeds to check odd divisors only, from 3 up to sqrt(n).
// At most half of the numbers between 3 and sqrt(n) are checked.

function isPrime2(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) {
        return false;
    }

    if (n%2==0) {
        return (n==2);
    }

    var m=Math.sqrt(n);

    for (var i = 3; i <= m; i += 2) {
        if (n%i == 0) {
            return false;
        }
    }

    return true;
}

// Even better: first, check if n is divisible by 2 or 3.
// Then check only the odd divisors that are not multiples of 3.
// At most 1/3 of divisors under sqrt(n) are checked;
// other divisors are multiples of either 2 or 3 anyway.

function isPrime3(n) {
    if (isNaN(n) || !isFinite(n) || n%1 || n<2) {
        return false;
    }

    if (n%2==0) {
        return (n==2);
    }

    if (n%3==0) {
        return (n==3);
    }

    var m=Math.sqrt(n);

    for (var i = 5; i <= m; i += 6) {
        if (n%i==0){
            return false;
        }

        if (n%(i+2)==0) {
            return false;
        }
    }

    return true;
}


module.exports = {
    isPrime1: isPrime1,
    isPrime2: isPrime2,
    isPrime3: isPrime3
};