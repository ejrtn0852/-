function solution(numbers) {
    numbers.sort((a, b) => b - a);
    let maxNumber = numbers[0];
    let secondMaxNumber = -1; // -1은 numbers 배열의 모든 원소가 0 이상이라는 조건을 사용
    
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < maxNumber) {
            secondMaxNumber = numbers[i];
            break;
        }
    }
    return secondMaxNumber !== -1 ? maxNumber * secondMaxNumber : maxNumber * maxNumber;
}