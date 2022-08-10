//https://school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  //n을 문자열로 바꾼후. 배열로 만들고.배열안의 요소를 숫자로 변경
  var arr = (n + '').split('').map(x => parseInt(x));
  //reduce를 사용하여 배열의 전체 합을 구한다.
  return arr.reduce((acc, cur) => acc + cur);

};
console.log(solution(123));