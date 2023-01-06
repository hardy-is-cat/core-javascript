/* ---------------------------------------------------------------------- */
/* Array Type                                                             */
/* ---------------------------------------------------------------------- */


// 객체(Object) : 키(key)를 사용해 식별할 수 있는 값을 담은 집합 - `키:값의 집합`
// 배열(Array) : 순서(index)가 있는 집합 - `값의 집합`

// ※ 배열은 특별한 종류의 객체로 대괄호를 사용해 요소에 접근하는 방식은 객체 문법을 사용. 
//   배열은 키(key)가 숫자(index)라는 점이 다름. 즉, 본질은 객체.
//   순서에 따른 제어가 가능하도록 다양한 메서드와 length 프로퍼티를 언어에서 제공.


// 배열 선언
let students = "정현, 세원, 보경, 보영, 동현".split(",");
// 문자열이 래퍼객체로 싸여졌다가 풀린 것
let numArr = new Array(1,2,3,4,5,6,7,8,9);
// 배열 생성자 함수
console.log(students);
console.log(numArr);

// 배열 요소의 총 갯수
console.log(students.length);

// 배열 요소 변경
students[0] = "하디"
console.log(students);


// 배열 요소 추가
let unshift = students.unshift("선범");
console.log(students);
let push = students.push("선범");
console.log(students);


// 배열 요소 제거
let shift = students.shift();
console.log(shift)
let pop = students.pop();
console.log(pop)
console.log(students)


// 큐(queue) vs. 스택(stack)
// 큐 FIFO (먼저 들어온 것이 먼저 나간다) ← queue ←
// 스택 LIFO (나중에 들어온 것이 먼저 나간다) ↓ stack ↑


// 배열 요소 순환(loop)
// for 문, for ~ of문
for(let student of students) {
  console.log(student)
}

// 배열 복사
let copiedArray = [...students];
console.log(copiedArray)


// 다차원 배열
// 행렬을 저장하는 용도

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

// 행렬의 정중앙에 위치한 요소를 찾으려면?
console.log(matrix[1][1]);

