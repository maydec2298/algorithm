// // https://school.programmers.co.kr/learn/courses/30/lessons/12916﻿

// function solution(s) {

//   let lowstr = s.toLowerCase()
//   let count = 0

//   for (let i = 0; i < s.length; i++) {
//     if (lowstr[i] === 'p') {
//       count++
//     } else if (lowstr[i] === 'y') {
//       count--
//     }
//   }

//   return count == 0 ? true : false;

// }


function solution(s) {

  var y_arr = s.match(/y/gi).length
  var p_arr = s.match(/p/gi).length

  // if (y_arr == p_arr || y_arr.length == p_arr.length) {
  //   return true
  // } else {
  //   return false
  // }
  return y_arr
  // p_arr.length
}
console.log(solution('Hello Javascriptp'))
console.log(solution('pPyY'))
console.log(solution('pPY'))
console.log(solution('abc'))

