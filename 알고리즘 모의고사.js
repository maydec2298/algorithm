//일주일 공부시간 구하기
function solution(arr1, arr2) {
  let answer = 0;

  //조건 중 체크아웃 시간이 29이상일경우
  for (let i = 0; i < arr2.length; i++) {   //arr2의 길이만큼 반복하며
    if (arr2[i] >= 29) {    //배열의 요소가 29이상일때
      arr2[i] = 21          //해당 요소를 21로 변경
    }
  } //arr2 = [23, 23, 21, 28, 21, 23, 23];

  // 공부시간 구하기
  for (let i = 0; i < arr1.length; i++) {   //arr1의 길이만큼 반복하며
    answer += arr2[i] - arr1[i]   //checkout시간에서 checkin시간을 뺀것을 모두 더해주면
  }
  return answer;  // 이번주 공부시간이 나온다
}
let arr1 = [9, 9, 9, 9, 7, 9, 8];   //checkin
let arr2 = [23, 23, 30, 28, 30, 23, 23];    //checkout




/////////////////////////////////////////////////////////////////

//D+day
function solution(month, day) {

  let answer = ""
  let start = new Date(2022, month, day + 98)

  let m = start.getMonth() + 1
  let d = start.getDate()
  return (m + '월' + d + '일')
  // return `${m}월 ${d}일`
}
console.log(solution(1, 18))

