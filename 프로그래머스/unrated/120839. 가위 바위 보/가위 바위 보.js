// 가위 2
// 바위 0
// 보 5
function solution(rsp) {
    let answer = '';
    const rspArray = [...rsp];
    for(let i =0; i<rspArray.length; i++) {
        if(rspArray[i] === "2") {
            answer += "0"
        } else if( rspArray[i] === "0") {
            answer += "5"
        } else if( rspArray[i] === "5") {
            answer += "2"
        }
    }
return answer;
}