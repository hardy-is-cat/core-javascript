/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */

let age = 16;

// if (age >= 14 && age <= 90) {
//   alert("14세 이상 90세 이하입니다")
// }

// if (!(age < 14) && !(age > 90)) {
//   alert("14세 이상 90세 이하입니다")
// }


let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB;

// 논리합(또는) 연산자
let AorB;

// 부정 연산자
let reverseValue;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy: false};
// console.log(whichFalsy)

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsFalsy: false};

let inputId = prompt("아이디를 입력해주세요").toLowerCase();

if (inputId === "admin") {
  let inputPassword = prompt("비밀번호를 입력해주세요")
  if (inputPassword === "TheMaster") {
    alert("환영합니다!")
  } else if (!inputPassword) {
    alert("취소되었습니다.")
  } else {
    alert("인증에 실패하였습니다.")
  }
} else {
  alert("취소되었습니다.")
}