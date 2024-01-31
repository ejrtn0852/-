function solution(numbers) {
    const words = ["zero","one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    const numbersArr =  numbers.match(new RegExp(words.join('|'), 'g'));
    let newArr = [];
    
    numbersArr.forEach( v => {
        if( v === "zero") newArr.push("0");
        if( v === "one")  newArr.push("1");
        if( v === "two")  newArr.push("2");
        if( v === "three") newArr.push("3");
        if( v === "four")  newArr.push("4");
        if( v === "five")  newArr.push("5");
        if( v === "six")   newArr.push("6");
        if( v === "seven") newArr.push("7");
        if( v === "eight") newArr.push("8");
        if( v === "nine")  newArr.push("9");
    });
 
    return     Number(newArr.join(""))
}