function solution(num_list, n) {
    const result = [];
    for (let i =0; i < num_list.length; i+= n) {
        result.push(num_list.slice(i, i + n));
    }
    return result
}

// slice 메서드는 배열의 특정 부분에 대한 얕은 복사본을 새로운 객체로 반환한다(return).
// 원본 배열은 수정되지 않고 slice()는 다음과 같은 두 매개 변수를 받는다.

// begin(선택적) 어디서부터 복사본을 만들지 시작할지를 나타내는 인덱스다.
// end(선택적) 어디까지 복사본을 만들지를 나타내는 인덱스로 이 인덱스에 해당하는
// 요소는 복사되지 않는다. 즉, 'end' 인덱스 바로 전까지의 요소가 복사된다.
