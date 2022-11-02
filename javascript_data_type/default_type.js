//숫자 타입
var intNum = 10;
var floatNum = 0.1;

//문자열 타입
var singleQuoteStr = 'single quote String';
var doubleQuoteStr = 'double quote string';
var singleChar = 'a';

//불린 타입
var boolVar = true;

//undefined 타입
var emptyVar;

//null타입
var nullVar = null;

console.log(
            'default_data_type : ',
            typeof intNum,
            typeof floatNum,
            typeof singleQuoteStr,
            typeof doubleQuoteStr,
            typeof boolVar,
            typeof nullVar,
            typeof emptyVar,
            typeof singleChar   );  

/**
 * javascript는 느슨핱 타입 체크언어이다.
 * javascript는 변수를 선언 할 때 타입을 미리 정하지 않고, var라는 한가지 키워드로만 변수를 저장한다.
 * 이렇게 선언된 변수는 어떠한 타입을 데이터라도 저장 가능하다.
 * 
 */

