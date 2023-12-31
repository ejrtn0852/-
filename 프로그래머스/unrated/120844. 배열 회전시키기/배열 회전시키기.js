// function solution(numbers, direction) {
//     let answer = [...numbers];
//     let lastIndex = numbers.length -1;
//     let zero = 0;
//     if(direction === 'right') {
//     for(let i = 1; i< numbers.length; i++) {
//         numbers[i] = answer[zero++];
//       }  
//      numbers[0] = answer[lastIndex]
//   }
//     if(direction === 'left') {
//       let firstElement = answer[0];
//         for (let i = 0; i < numbers.length; i++) {
//             numbers[i] = answer[i + 1];
//         }
//         numbers[lastIndex] = firstElement;
//     }
//   return numbers
// }

// 모듈러 연산 최적화 
// i + n - 1) % n , (i + 1) % n 에 해답이 나와있음 다시 봤을 때 이해가 안가면 식을 풀어볼것.
function solution (numbers, direction) {
    let newNumbers = [...numbers];
    let n = numbers.length;
    for(let i = 0; i< n; i++ ) {
        direction === 'right' ?
         newNumbers[(i + 1) % n] = numbers[i] :
         newNumbers[(i + n - 1) % n ] = numbers[i]
    }
    return newNumbers
}