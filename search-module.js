
// 모듈로써 어디든 가져다 사용할 수 있는 방식
function searching (array, name) {
  for (let i = 0; i <studentList.length ; i++) {
    if (studentList[i] === name) {
      console.log(i)
    } else { 
      console.log(` ${name}가 아님`)
    }
  } 
}


export default function searching (array, name) {
  for (let i = 0; i <studentList.length ; i++) {
    if (studentList[i] === name) {
      console.log(i)
    } else { 
      console.log(` ${name}가 아님`)
    }
  } 
}