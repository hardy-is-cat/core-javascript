/* ---------------------------------------------------------------------- */
/* Functions → Expression                                                 */
/* ---------------------------------------------------------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calcTotal(10000, 8900, 1360, 2100);
let resultY = calcTotal(21500, 3200, 9800, 4700);
let resultZ = calcTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식

let calculateTotal = function (moneyA, moneyB, moneyC, moneyD) {
  // console.log(arguments);
  
  let total = 0;

  // 함수 안에서만 접근 가능한 인수들의 집합 객체로서 배열과 유사하여 유사 배열 타입으로 불리는 변수 : arguments
  // arguments 객체를 사용해 함수의 매개변수 없이 아이템의 총합을 구할 수 있다.

  // 유사배열은 배열이 아니다. 고로 배열의 능력을 사용하려면 진.짜. 배열로 만들어야 한다.
  // 배열의 능력 : forEach, reduce

  // let arr = Array.from(arguments); // static method
  let arr = [].slice.call(arguments); // instance method

  // forEach 사용해서 배열 요소의 합 구하기
  // arr.forEach(price => total += price);
  
  // reduce 사용해서 배열 요소의 합 구하기
  total = arr.reduce((price, total) => total += price);

  // for문으로 배열 요소의 합 구하기
  // for (let i = 0; i < arguments.length; i++) {
  //   total += arguments[i];
  // }
  // return moneyA + moneyB + moneyC + moneyD;

  return total;
};
// console.log(calculateTotal(100,300,500,400))


// 익명(이름이 없는) 함수 (표현)식
let anonymousFunctionExpression;




// 유명(이름을 가진) 함수 (표현)식
let namedFunctionExpression;


// 콜백 함수 (표현)식
let callbackFunctionExpression = function(url, resolve, reject) {
  if (typeof url === "string") {
    resolve(url);
  } else {
    reject();
  }
};

callbackFunctionExpression("https://www.naver.com", resolveFunc, rejectFunc)

function resolveFunc(url) {
  console.log(`${url} 로 이동합니다.`)
}

function rejectFunc() {
  console.log("url 정보를 확인해주세요.")
}


// 함수 선언문 vs. 함수 (표현)식

// function aa() {}

const aa = function() {}


// 즉시 실행 함수 (표현)식
// Immediately Invoked Function Expression
// 즉시 호출되는 함수 표현식
let IIFE;

(function() {console.log("해위")})();