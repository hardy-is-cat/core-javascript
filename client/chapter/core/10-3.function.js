/* ---------------------------------------------------------------------- */
/* Functions → Arrow                                                      */
/* ---------------------------------------------------------------------- */


const calculateTotal = function(moneyA, moneyB, moneyC, moneyD) {
  return moneyA + moneyB + moneyC + moneyD;
}

let resultX = calculateTotal(10000, 8900, 1360, 2100);
let resultY = calculateTotal(21500, 3200, 9800, 4700);
let resultZ = calculateTotal(9000, -2500, 5000, 11900);

// console.log(resultX);
// console.log(resultY);
// console.log(resultZ);


// 함수 선언 → 화살표 함수 (표현)식
// let calcAllMoney = (moneyA, moneyB, moneyC, moneyD) => moneyA + moneyB + moneyC + moneyD;
let calcAllMoney = (...args) => {
  let total = 0;
  args.forEach(price => total += price);
  return total;
};
// console.log(calcAllMoney(10000, 8900, 1360, 2100))

// 화살표 함수와 this
// 객체의 메서드로 함수를 실행할 경우는 일반함수로 실행해야 this가 객체를 찾습니다.
// 메서드 안에서의 함수는 this 를 찾기 위해서는 arrowFunction 이 오히려 좋아

const user = {
  name: "tiger",
  age: 32,
  address: "서울시 중랑구 면목동",
  grades: [80, 90, 100],
  totalGrades: function() {
    let total = 0;
    this.grades.forEach((grade) => total += grade)
    return total;
  }
}
// console.log(user.totalGrades())



/* 다음 함수를 작성해봅니다. -------------------------------------------------- */

// pow(numeric: number, powerCount: number): number;
let pow = function(numeric, powerCount) {
  if (typeof numeric === "number" && typeof powerCount === "number") {
    let result = 1;
    for(let i = 0; i < powerCount; i++) {
      result *= numeric;
    }
    return result;
  } else {alert("기본값과 지수는 숫자값이어야 합니다.")}
}
// 2의 53승을 거듭제곱연산자 ** 사용하지 말고 for문 사용해서 만들기
console.log(pow(2, 53))

// reduce, 화살표함수로 만들기
let powExpression = (numeric, powerCount) => Array(powerCount).fill(numeric).reduce(acc => acc * numeric, 1)



// repeat(text: string, repeatCount: number): string;
let repeat = function(text, repeatCount) {
  if(typeof text === "string" && typeof repeatCount === "number") {
    let result = '';
    for(let i = 0; i < repeatCount; i++) {
      result += text;
    }
    return result;
  } else {alert("텍스트엔 문자, 반복 횟수엔 숫자를 넣어주세요.")}
}

console.log(repeat("hello😘",3)) // 'hello😘hello😘hello😘'

// reduce, 화살표함수로 만들기
let repeatExpression = (text, repeatCount) => Array(repeatCount).fill(text).reduce(acc => acc + text,'')