const findMaxKeys = (obj) => {
    const entries = Object.entries(obj);
    const maxValue = Math.max(...Object.values(obj));

    return entries.reduce((acc, [key, value]) => {
        if (value === maxValue) {
            acc.push(key);
        }
        return acc;
    }, []);
};

function solution(array) {
    const obj = {};
    array.forEach((item) => !obj[item] ? obj[item] = 1 : obj[item]++);
    let result = findMaxKeys(obj);
    if(findMaxKeys(obj).length > 1) {
        return -1
    } 
    return Number(result)
    // return findMaxKeys(obj).length > 1 ? -1 : 1;
}



