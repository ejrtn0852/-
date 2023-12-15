function solution(emergency) {
  let count = 0;
  const priorities = [];

  const findAndAssignPriority = (emergency,priorities) =>  {
    count++
    if(count <= emergency.length) {
        const max = emergency.indexOf(Math.max(...emergency));
        emergency[max] = null
        priorities[max] = count;
        findAndAssignPriority(emergency,priorities);
    }  return
      
}
  findAndAssignPriority([...emergency],priorities);
  return priorities
}

// 