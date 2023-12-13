const solution = (function () {
// 알파벳을 직접 선언한다. 클로저로 내부 함수가 외부 함수의 변수에 접근할 수 있도록 해주며 이 경우에는
// 'alphabets' 배열이 외부 함수의 지역 변수로 유지되어 메모리 사용을 최적화하는데 도움된다.
	const alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('');
	return function (age) {
	// toString 은 String.prototype.toString 문자열 객체의 프로토타입이다. 받는 숫자를 문자열로 바꾼다.
		let ageStr = age.toString();
		return ageStr.split('').map(num => alphabets[parseInt(num)]).join('')
	}
})();
