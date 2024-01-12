function solution(my_string) {
    let gather = ['a', 'e', 'i', 'o', 'u'];
    return [...my_string].filter(item => !gather.includes(item)).join('');
}