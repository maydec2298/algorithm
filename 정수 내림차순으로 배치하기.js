//https://school.programmers.co.kr/learn/courses/30/lessons/12933


function solution(n) {
  //n을 문자열로 바꾼후. 배열로 만들고.배열안의 요소를 숫자로 변경
  var arr = (n + '').split('').map(x => parseInt(x)); //[1,1,8,3,7,2]

  arr.sort((a, b) => b - a)   //배열의 내림차순 [ 8, 7, 3, 2, 1, 1 ]
  return Number(arr.join('')); // Number('873211')

}
console.log(solution(118372));
