function solution(n) {
     const arr = [...`${n}`];
    return arr.reduce((acc,cur) => acc + Number(cur) , 0 )
}