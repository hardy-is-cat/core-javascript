/* ---------------------------------------------------------------------- */
/* Do While Loop                                                          */
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

// let i = 10;
// do {
//   console.log(frontEndDev[i]);
//   i++;
// } while (i < frontEndDev.length);

// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// let inputCount = +prompt("몇 번 순환할까요?", '');
// do {
//   if(inputCount < 0 || !inputCount) {
//     console.log("최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.");
//     break;
//   } else if (inputCount > frontEndDev.length - 1) {
//     console.log("숫자가 너무 큽니다. 새로 작성해주세요.");
//     break;
//   }
//   console.log(frontEndDev[inputCount]);
//   inputCount--;
// } while (inputCount)


// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector(".first");
let second = document.querySelector(".second");

function next(node) {
  do {
    node = node.nextSibling;
  } while(node.nodeType !== document.ELEMENT_NODE) // first.nodeType 이 엘리먼트가 되는 순간 탈출
  return node;
}

console.log(next(first))

function prev(node) {
  do {
    node = node.previousSibling;
  } while (node.nodeType !== document.ELEMENT_NODE)
  return node;
}

console.log(prev(second))