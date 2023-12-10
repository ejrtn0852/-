function solution(n) {
  let totalPieces = 6; 
  let count = 0;
  while (totalPieces % n !== 0) {
    totalPieces += 6;
    count++;
  }
  return count + 1; 
}