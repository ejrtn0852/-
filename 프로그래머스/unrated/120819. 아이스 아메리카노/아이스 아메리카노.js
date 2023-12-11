function solution(money) {
    var answer = [];
    const result = Math.floor(money/5500);
    const result2 = money - result * 5500
    answer.push(result)
    answer.push(result2)
    return answer;
}