/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

// let answer = prompt("자바스크립트의 ‘공식’ 이름은 무엇일까요?");
// if (answer === "ECMAScript") {
//   alert("정답입니다!")
// } else {
//   alert("바보입니다!")
// }


// let num = +prompt("숫자를 입력해주세요.");
// if(num > 0) {
//   console.log(1)
// } else if (num < 0) {
//   console.log(-1)
// } else if (num === 0) {
//   console.log(0)
// }


// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?
let didWatchMovie = prompt("님 그 영화 봄?");

if (didWatchMovie === "yes") {
  alert("ㅇㅋ")
} else if (didWatchMovie === "no") {
  let goingToWatchMovie = prompt("님 그 영화 볼거임?");
  if (goingToWatchMovie === "yes") {
    alert("나랑 보러 가셈")
  } else {
    alert("ㅇㅋ")
  }
}

// 영화 볼거니?


// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식