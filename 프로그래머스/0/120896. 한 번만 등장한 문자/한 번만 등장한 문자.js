function solution(s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!obj.hasOwnProperty(s[i])) {
            obj[s[i]] = 1; 
        } else {
            obj[s[i]] += 1; 
        }
    }
    let result = Object.keys(obj).filter(key => obj[key] === 1)
    return !result ? "" : result.sort().join("")
}
