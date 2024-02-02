function solution(s) {
    let obj = {};
    for(let key of s) {
        obj[key] = (obj[key] || 0) + 1;
    }
    let result = Object.keys(obj).filter(key => obj[key] === 1)
    return !result ? "" : result.sort().join("")
}
