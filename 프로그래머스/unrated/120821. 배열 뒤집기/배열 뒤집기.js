// function solution(num_list) {
//     var answer = [...num_list].reverse()
//     return answer
// }

const solution = (num_list) => {
  let array = [];
    for(let i =num_list.length -1; i>=0 ; i--) {
        array.push(num_list[i])
    }
    return array
}