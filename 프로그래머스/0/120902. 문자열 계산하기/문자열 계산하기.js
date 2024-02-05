function solution(my_string) {
    let parts = my_string.split(" ");
    let result = parseInt(parts[0]); // 첫 번째 숫자로 초기화

    for (let i = 1; i < parts.length; i += 2) {
        let operator = parts[i];
        let nextNum = parseInt(parts[i + 1]);

        if (operator === "+") {
            result += nextNum;
        } else if (operator === "-") {
            result -= nextNum;
        }
    }

    return result;
}
