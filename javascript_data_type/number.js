// var 키워드로 선언된 자바스크립트 변수에는 정수나 실수 구분 없이 그 값을 바로 저장 할 수 있다.

var num = 5/2;

console.log(num);
console.log(Math.floor(num));

/**
 * 자바스크립트는 정수형이 따로 없고, 모든 숫자를 실수로 처리하므로 나눗셈 연산을 할 때는 주의해야한다.
 * 나눗셈을 할 때 위의 예시 처럼 5/2를 할 경우 c언어 처럼 소수부분을 버린 정수 부분이 나오는것이 아니라
 * 소수 부분까지 같이 나온다.
 * 만약 정수 부분만 나타내고 싶다면 Math.foolr() 메서드를 사용해야한다.
 */

