function solution(order) {
let index = 0;
let arr = Array.from(String(order));
let checkNum = [3,6,9];
    arr.forEach( v => checkNum.includes(Number(v)) ? index++ : null)
    return index
}