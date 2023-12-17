
// 장군개미 공 5
// 병정개미 공 3
// 일개미  공1 

function solution(hp) {
    let ants = 0; 
    ants += Math.floor(hp / 5); // 장군개미 최대 사용
    // ants는 4다.
    hp %= 5;
    // hp는 3이다
    
    ants += Math.floor(hp / 3); // 병정개미 최대 사용
    // 4에 3/3 == 1, 4+1로 ants는 5다
    hp %= 3;
    // 3%3 == 0이다.

    ants += hp; // 남은 hp는 일개미로 처리
    // 개미 수 5 + 0 === 5다 
    return ants;  
}