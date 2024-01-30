function solution(my_string) {
 let hasUpperCase = /[A-Z]/;
 let arr = [...my_string];
 let newArr = [];
    arr.forEach( v => {
    if(hasUpperCase.test(v)) {
        newArr.push(v.toLowerCase());
    } else {
        newArr.push(v.toUpperCase());
    }
    })
    return newArr.join("");
}
