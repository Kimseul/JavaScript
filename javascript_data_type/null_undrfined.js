/**
 * null과 undefined 는 '값이 비어있음.'을 나타낸다.
 * 자바스크립트 내에서는 기본적으로 값이 할당 되어있지 않은 변수는 undefined타입이다.
 * undefined 는 타입이자 값이다.
 * null 개발자가 명시적으로 값이 비어있음을 나타내는 데 사용한다.
 * null타입 변수는 typeof의 결과가 null이 아니라 object라는 점이다.
 * null타입의 변수임을 확인 할 때는 typeof 연산자를 사용하지 않고 일치 연산자(===)를 사용해야 된다.
 * 
 * 
 */

var nullVar = null;

console.log(typeof nullVar === null);
console.log(nullVar === null );