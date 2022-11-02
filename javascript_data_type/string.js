var str = 'test';
console.log(str[0],str[1],str[2],str[3]);

str[0] = 'T';
console.log(str);

/**
 * 문자열은 문자 배열 처럼 인덱스를 이용하여 접근 할 수 있다.
 * 주목할 점은 예제에서 str[0] 값을 'T'로 변경을 하였으나
 * 출력값은 변하지 않았다.
 * 즉, 자바스크립트에서는 한번 생성된 문자열은 읽기만 가능하지 수정은 불가능 하다.
 */