function primeFactorization(num) {
    const factors = [];
    // 2로 나누어 떨어질 때까지 나누기
    while (num % 2 === 0) {
        factors.push(2);
        num /= 2;
    }
    // 3부터 시작해 제곱근까지의 모든 홀수로 나누기
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        // i로 나누어 떨어질 때까지 나누기
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    // 남은 수가 2보다 큰 경우, 이는 소수임
    if (num > 2) {
        factors.push(num);
    }

    return factors;
}
function solution(n) {
    return primeFactorization(n).filter( (v,i,z) => i == z.indexOf(v));
}