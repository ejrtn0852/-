function solution(n) {
  let totalPieces = 6; // 여섯 조각으로 나눠진 피자
  let count = 0;
  let i = true
  while (i) {
    if(totalPieces % n !== 0) {
      totalPieces += 6;
      count++;   
    } else {
        count++;
        i = false;
    }
  }
  return count;
}