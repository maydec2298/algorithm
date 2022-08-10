//https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  let spl_s = s.split(' ');   //s를 띄어쓰기 기준으로 단어를 나눔 'try''hello''world'
  let answer = '';

  for (let i = 0; i < spl_s.length; i++) {    //spl_s.length = 3
    for (let j = 0; j < spl_s[i].length; j++) {  //'try'중 몇번째 요소를 선택할지
      if (j % 2 == 0) {   //0,짝수 일때
        answer += spl_s[i][j].toUpperCase();    //대문자로 변환하여 넣기
      } else {        //그 외(홀수)일때
        answer += spl_s[i][j].toLowerCase();    //소문자로 변환하여 넣기
      }
    } // 2번 for문 끝
    //단어 사이에 스페이스바 추가
    if (i < spl_s.length - 1) {   // 띄어쓰기는 0,1 뒤에 들어가야하기때문에 spl_s.length에 -1
      answer += ' '
    }
  } //1번 for문 끝
  return answer
}
console.log(solution("try hello world"));
