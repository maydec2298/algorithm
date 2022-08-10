function solution(n) {
  //n을 문자열로 바꾼후. 배열로 만들고.배열안의 요소를 숫자로 변경
  var arr = (n + '').split('').map(x => parseInt(x));
  return arr.reverse()

};
console.log(solution(12345));