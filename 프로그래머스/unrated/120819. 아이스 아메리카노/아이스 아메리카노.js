function solution(money) {
    const result = Math.floor(money/5500);
    const result2 = money - result * 5500
    return [result,result2]
}