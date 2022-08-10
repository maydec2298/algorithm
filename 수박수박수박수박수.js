//https://school.programmers.co.kr/learn/courses/30/lessons/12922

var answer = '';    ////문자(string)로 변환
function solution(n) {

  for (let i = 0; i < n; i++) {   //글자가 n개니까 n전까지 for문을 돌리고
    if (i % 2 == 0) {   // 0,짝수일때 '수' 추가
      answer += '수'
    } else {
      answer += '박'  //그 외, 즉 홀수일때 '박' 추가
    }
  }

  return answer;
}
console.log(solution(5))