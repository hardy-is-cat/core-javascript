/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log("stringTotalLength", stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[3];
console.log("extractCharacter", extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter = "more" + message[3];
console.log("immutableChangeCharacter", immutableChangeCharacter);


// 부분 문자열 추출
let slice = message.slice(0, 6);
let slice2 = message.slice(8);
console.log("slice", slice);
console.log("slice2", slice2);

let subString = message.substring(0, 6);
console.log("substring", subString);

// 없어짐
let subStr;


// 문자열 포함 여부 확인
let indexOf = message.indexOf("i");
console.log("indexOf", indexOf);

// indexOf 랑 비슷 잘 안 씀
let lastIndexOf;

let includes = message.includes("c");
console.log("includes", includes);

let startsWith = message.startsWith("L");
console.log("startsWith", startsWith);

let endsWith = message.endsWith(".");
console.log("endsWith", endsWith)


// 공백 잘라내기
let trimEnd = message.trimEnd();
console.log("trimEnd", trimEnd)
let trimRight;
let trim;


// 텍스트 반복
let repeat = message.repeat(3);
console.log("repeat", repeat)


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log("toLowerCase", toLowerCase);

let toUpperCase = message.toUpperCase();
console.log("toUpperCase", toUpperCase)


// 텍스트 이름 변환 유틸리티 함수
let toCamelCase;
let toPascalCase;

function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}