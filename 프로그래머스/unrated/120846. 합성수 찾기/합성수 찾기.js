function solution(n) {
    // 에라토스테네스의 체 알고리즘(큰수에 적합)
    // 2부터 시작하는 연속된 정수 목록 생성
    let isPrime = Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    for(let i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
   const result = isPrime.filter( (v,i) => i > 2 && v == false);
    return result.length
}