/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10,54,1,45,11,65,106];


/* 요소 순환 -------------------------------------------------------------- */

// forEach

const user = {}

arr.forEach(function(item, index) {
  this[index] = item;
}, user);

/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift
// reverse
// arr.reverse()

// splice
// arr.splice(1, 0, 23, 5)
// 인덱스 1부터 작업할건데 삭제하는건 0개고 그 자리에 23, 5를 추가해달라

// sort
// 반환 값 < 0 : a가 b보다 앞에 있어야 한다
// 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다
// 반환 값 > 0 : b가 a보다 앞에 있어야 한다
arr.sort((a, b) => {
  return b - a;
})
console.log(arr)

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map
// map은 기존 배열을 수정하는게 아닌 새로운 배열을 만들어 줌
const newArr = arr.map((item) => {
  return item * 2
});

console.log(newArr);


// forEach => 함수 여러 번 돌리기 / map => 함수 돌려서 배열 만들기
const todo = ["밥먹기", "미용실 가기", "공부하기"];

let template = todo.map((todoList) => {
  return `<li>${todoList}</li>`
});

// template.forEach((item) => {
//   document.body.insertAdjacentHTML('beforeend', item)
// })


/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes
console.log(arr.includes(999));
console.log(arr.includes(999));

/* 요소 찾기 -------------------------------------------------------------- */

// find
const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]



// findIndex

/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

// reduce
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */

// split
// join