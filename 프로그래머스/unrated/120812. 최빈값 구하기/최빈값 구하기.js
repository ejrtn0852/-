// const findMaxKeys = (obj) => {
//     const entries = Object.entries(obj);
//     const maxValue = Math.max(...Object.values(obj));
//     return entries.filter(([key, value]) => value === maxValue).map(([key]) => key);
// };

// function solution(array) {
//     const obj = {};
//     array.forEach((item) => !obj[item] ? obj[item] = 1 : obj[item]++);
//     let result = findMaxKeys(obj);
//     if(result.length > 1) {
//         return -1
//     } 
//     return Number(result)
// }



function solution(array) {
    const frequencyMap = {};
    let maxFrequency = 0;
    let maxItem = null;
    let maxItemCount = 0;

    for (const item of array) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;
        if (frequencyMap[item] > maxFrequency) {
            maxFrequency = frequencyMap[item];
            maxItem = item;
            maxItemCount = 1;
        } else if (frequencyMap[item] === maxFrequency) {
            maxItemCount++;
        }
    }

    return maxItemCount === 1 ? Number(maxItem) : -1;
}