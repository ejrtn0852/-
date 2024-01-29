function solution(sides) {
   let [minNum,middleNum, maxNum] = sides.sort((a,b) => a-b);
    return (minNum + middleNum) > maxNum ? 1 : 2
}