/* ---------------------------------------------------------------------- */
/* For In Loop                                                            */
/* ---------------------------------------------------------------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2022,
};

let key1 = "valueOf"
let key2 = "creator"
let key3 = "name"
console.log(javaScript)

console.log(key1 in javaScript)
console.log(key2 in javaScript)
console.log(key3 in javaScript)

// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

// 객체 자신의(own) 속성(property)인지 확인(has)하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

console.log(javaScript.hasOwnProperty(key1))
console.log(Object.prototype.hasOwnProperty.call(javaScript, key1))


// for ~ in 문
// - 객체 자신의 속성만 순환하려면?
// - 배열 객체 순환에 사용할 경우?

for(let key in javaScript) {
  if ({}.hasOwnProperty.call(javaScript, key)) {
    console.log(key)
  }
}

const inputScore = prompt("점수를 입력해주세요.")

if (inputScore > 60) {
  console.log("합격입니다")
} else {
  console.log("불합격입니다")
}

let result = inputScore > 60 ? "합격입니다" : "불합격입니다"
console.log(`결과 : ${result}`)