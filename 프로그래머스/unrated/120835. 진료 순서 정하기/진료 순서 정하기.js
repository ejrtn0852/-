function solution(emergency) {
  // 1. count는 가장 큰 요소의 순서를 정한다
  let count = 0;
  // 2. priorities은 반환될 새로운 배열이다. 순서가 할당될것을 기대한다.
  const priorities = [];
  
  const findAndAssignPriority = (emergency,priorities) =>  {
    // 함수가 실행될 때 마다 count 값을 증가시킨다. 
    count++
        // count <= emergency.length일 때 밑의 로직을 실행시킨다.
    if(count <= emergency.length) {
        // emergency 정수 배열의 가장 큰 정수의 인덱스를 찾고 변수 max에 할당한다.
        const max = emergency.indexOf(Math.max(...emergency));
        // 복사한 emergency 배열에 가장 큰 정수의 인덱스에 null을 할당한다.
        emergency[max] = null
        // 반환할 배열에 emergency의 가장 큰 정수의 인덱스 위치에 count값을 할당한다 
        // 예를 들면 가장 큰값 10 => 1이 할당된다.
        priorities[max] = count;
        // 재귀 호출한다.
        findAndAssignPriority(emergency,priorities);
    }
    // 조건식이 false라면 함수를 종료한다.
    return
}
  // 3. findAndAssignPriority 함수는 재귀 함수다 인자로 emergency,priorities 를 받는다
  //    최대값의 순서를 찾아 새 배열에 할당한다.
  findAndAssignPriority([...emergency],priorities);
  // 최종적으로 순서가 담긴 priorities 배열을 반환한다.
  return priorities
}
