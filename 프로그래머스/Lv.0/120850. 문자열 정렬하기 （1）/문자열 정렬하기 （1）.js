function solution(my_string) {
   let numbers = [...my_string].filter(item => !isNaN(item)).map(Number)
    return numbers.sort((a, b) => a - b);
}