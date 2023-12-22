function solution(balls, share) {
    // BigInt 팩토리얼을 계산하는 함수
    function factorial(num) {
        let result = BigInt(1);
        for (let i = 1; i <= num; i++) {
            result *= BigInt(i);
        }
        return result;
    }
    // 분자(n!) 계산
    let molecule = factorial(balls);
    // 분모((n-m)! * m!) 계산
    let denominator = factorial(balls - share) * factorial(share);
    // 조합의 수 계산
    return molecule / denominator;
}
