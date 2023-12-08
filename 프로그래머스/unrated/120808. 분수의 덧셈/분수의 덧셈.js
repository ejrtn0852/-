
// 두 분수를 더하는 방법
// 1. 두 분수의 분모를 공통분모로 만든다.
// 2. 각 분자를 새로운 공통 분모로 나눈 값을 구한다.
// 3. 두 분수의 새로운 분자를 더한다.

// 기약분수로 나타내는 방법
// 두 분수의 새로운 분자를 더하고, 공통 분모로 나눈다.
// 결과를 기약분수로 만든다.


function solution(numer1, denom1, numer2, denom2) {
    // 최대공약수를 구하는 함수
    const euclideanAlgorithm = (a,b) => b !== 0 ?  euclideanAlgorithm(b, a%b) : a;
    // 알고리즘이 인자를 받으면 조건식을 평가한다 참이면 재귀호출한다 재귀호출에선 b의 값을 가지고
    // 기존의 a와b를 나눈 나머지 값을 다시 조건식을 평가한다.
    // ex 6,12 => euclideanAlgorithm(12, 6&12) (b !== 0 ) == false 
    // return 6
    
    // 공통 분모를 구한다 공통 분모는 두 정수를 곱해지는 수다. ex) 2*4 = 8 
    const commonDenominator = denom1 * denom2;

    // 각 분자를 새로운 공통 분모로 변환
    // 2/8 , 8/4 각 newNumer1 = 4, newNumer2 = 2; (각 분자로 들어온 값이 1이라면)
    // 분자를 더한 후 최대공약수로 나누기
    // resultNumerator는 6. 
    const resultNumerator = numer1 * (commonDenominator / denom1) + 
                             numer2 * (commonDenominator / denom2)  

  
    // 유클리드 호제법 알고리즘(gcd)으로 유클리드 호제법은 최대공약수를 찾는 알고리즘이다.
    // 두 정수에 대해, a,b를 나누고 나머지를 구한다. 나머지가 0이 될때까지 계속 나눈다.
    const gcd = euclideanAlgorithm(resultNumerator, commonDenominator);
    
    // 결과를 기약분수로 반환
    const simplifiedNumerator = resultNumerator / gcd;
    const simplifiedDenominator = commonDenominator / gcd;

    // 배열에 담아 반환
    return [simplifiedNumerator, simplifiedDenominator];
}