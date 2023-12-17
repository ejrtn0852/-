function solution(letter) {
    let array = letter.split(' ')
    let result = [];
   let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
for(let i = 0; i<array.length; i++) {
    for(const key in morse) {
        if(array[i] === key) {
            result.push(morse[key]);
        }
}
}
    return result.join('')
}