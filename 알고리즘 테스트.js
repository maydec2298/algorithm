// 2번. 자연수 뒤집어 더하기

function solution(n) {
  let plus = ""
  let result = ""
  let sum = 0

  //숫자인 n을 문자열로 바꾼후. 배열로 만들고.배열안의 요소를 숫자로 변경
  var arr = (n + "").split("").map(x => parseInt(x));  //[ 7, 1, 8, 2, 5, 3 ]

  //
  let new_arr = arr.reverse() //안에 요소를 뒤집기 [ 3, 5, 2, 8, 1, 7 ]
  for (i = 0; i < new_arr.length; i++) {  //new_arr for문으로 돌려서
    plus += arr[i] + '+'    // '3+5+2+8+1+7+'
    sum += new_arr[i]    //26
  }
  plus = plus.slice(0, -1);    //plus의 마지막 + 지워주기
  result = plus + '=' + sum    //합치기 
  return result  //'3+5+2+8+1+7=26'
}
console.log(solution(718253))