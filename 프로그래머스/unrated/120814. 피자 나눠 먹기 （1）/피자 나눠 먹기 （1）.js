function solution(n) {
    let counter = 0;
    for(let i = 0; i<n; i++) {
        if(i % 7 == 0) counter++;
    }
    return counter;
} 
