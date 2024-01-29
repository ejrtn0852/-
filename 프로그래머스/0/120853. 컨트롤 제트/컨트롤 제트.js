function solution(s) {
 let arr = s.split(" ");
 let result = arr.reduce((acc, cur, index, origin) => {
    if (cur === "Z" && index > 0) {
        acc -= Number(origin[index - 1]);
    } else {
        acc += Number(cur);
    }
    return acc;
}, 0);
    return result;
}

