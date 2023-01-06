/* ---------------------------------------------------------------------- */
/* While Loop                                                             */
/* ---------------------------------------------------------------------- */

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)
// let i = 0;
// while(i < frontEndDev.length) {
//   console.log(frontEndDev[i]);
//   i++;
// }

// while 문 (역순환 : 역방향)

// let i = frontEndDev.length - 1;
// while(i >= 0) {
//   console.log(frontEndDev[i]);
//   i--;
// }

// 변수 없이 배열 역순으로 출력하기 원 배열이 파괴 됨
// while (frontEndDev.length) {
//   console.log(frontEndDev.pop());
// }

// 원 배열을 복사한 배열을 순서대로 출력하기 원 배열은 원본을 유지 함
let copyArray = [...frontEndDev]

while (copyArray.length) {
  console.log(copyArray.shift());
}

console.log(frontEndDev, copyArray)

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);



// 성능 진단 : 순환 vs. 역순환