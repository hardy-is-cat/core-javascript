/* ---------------------------------------------------------------------- */
/* Switch                                                                 */
/* ---------------------------------------------------------------------- */

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
		  DAWN       = '새벽';

// let thisTime = DAWN;

// switch(thisTime) {
//   case "아침":
//     console.log('뉴스 기사 글을 읽는다.');
//     break;
//   case "점심":
//     console.log('자주 가는 식당에 가서 식사를 한다.');
//     break;
//   case "저녁":
//     console.log('동네 한바퀴를 조깅한다.');
//     break;
//   case "밤":
//   console.log('친구에게 전화를 걸어 수다를 떤다.');
//   break;
//   case "심야":
//   case "새벽":
//     console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.');
// }


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

let thisTime = NIGHT;
if (thisTime === "아침") {
  console.log('뉴스 기사 글을 읽는다.')
} else if (thisTime === "점심") {
  console.log('자주 가는 식당에 가서 식사를 한다.')
} else if (thisTime === "저녁") {
  console.log('동네 한바퀴를 조깅한다.')
} else if (thisTime === "밤") {
  console.log('친구에게 전화를 걸어 수다를 떤다.')
} else if (thisTime === "심야" || "새벽") {
  console.log('한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.')
}


/* switch vs. if -------------------------------------------------------- */

// let num = +prompt("0~6 사이의 숫자를 입력해주세요.");

function getDay(numValue) {
  // let numValue = +prompt("0~6사이의 숫자를 입력해주세요")
  switch (numValue) {
    case 0: return "일";
    case 1: return "월";
    case 2: return "화";
    case 3: return "수";
    case 4: return "목";
    case 5: return "금";
    case 6: return "토";
    default: alert("0~6이라고");
  }
}

let result = getDay(Math.round(Math.random()*6))
console.log(result)