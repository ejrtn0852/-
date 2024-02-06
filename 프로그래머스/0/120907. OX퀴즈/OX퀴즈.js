function solution(quiz) {
   return quiz.reduce((acc,cur) => {
        let result = 0;
        let test = cur.split(" ");
        if(test[1] === "+") {
           result = Number(test[0]) + Number(test[2]);
           } else {
               result = Number(test[0]) - Number(test[2]);
           }
        if(result !== Number(test[4])) {
            acc.push("X")
        }  else {
            acc.push("O")
        }

        return acc;
    },[])
}