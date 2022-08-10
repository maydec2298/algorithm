//https://school.programmers.co.kr/learn/courses/30/lessons/12918

function solution(s) {
  var num_s = parseInt(s);  //s=a234일때 num_s==NaN / s=1234일때 num_s==1234

  //s 길이가 4이거나 6이고, num_s 는 s와 같을때 true 아니면 false
  return (s.length === 4 || s.length === 6) && num_s == s ? true : false

}
console.log(solution('a234'));
console.log(solution('1234'));