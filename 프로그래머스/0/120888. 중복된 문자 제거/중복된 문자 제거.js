function solution(my_string) {
  return  [...my_string].filter( (v,i,s) => s.indexOf(v) === i).join("");
}