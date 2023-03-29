const studentList = [
  "강지민",
  "곽윤호",
  "권예준",
  "김동주",
  "김은아",
  "김종윤",
  "김지섭",
  "김형진",
  "노수민",
  "류은이",
  "박달재",
  "박수연",
  "박준형",
  "성해경",
  "이경택",
  "이세민",
  "이재권",
  "임지성",
  "장루빈",
  "정성철",
  "정지은",
  "정희은",
  "최대건",
  "한유진",
  "허진",
];

// console.log(studentList[studentList.length-1])

// 배열 [ 마지막 번째];
// length는 항상 마지막 인덱스보다 + 1 많다.
// 마지막 원소는 length 보다 항상 - 1 이다


// 여기부터 코딩 
for (let i = 0; i <studentList.length ; i++) {
  if (studentList[i] === '이재권') {
    console.log(i)
  } else { 
    console.log(' 걔가 아님 ')
  }
}

//여기부터 팩토링

function searching (array, name) {
  for (let i = 0; i <studentList.length ; i++) {
    if (studentList[i] === name) {
      console.log(i)
    } else { 
      console.log(` ${name}가 아님`)
    }
  } 
}
