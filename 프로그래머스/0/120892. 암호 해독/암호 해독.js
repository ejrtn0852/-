function solution(cipher, code) {
    let newArray = [];
    for (let i = code - 1; i < cipher.length; i += code) {
        newArray.push(cipher[i]);
    }
    return newArray.join("");
}