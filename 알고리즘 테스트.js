// function solution(arr1, arr2, signs) {
//   let answer = [[]];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr1[i].length; j++) {
//       answer += arr1[i][j] + arr2[i][j]
//     }
//   } return answer

// }
// let arr1 = [[5, 7, 1], [2, 3, 5]];
// let arr2 = [[5, 1, 6], [7, 5, 6]];
// let signs = [[true, true, false], [false, true, false]];
// console.log(solution(arr1, arr2, signs))


// function solution(n) {
//   let plus = ""
//   let result = ""

//   let sum = 0
//   var arr = (n + '').split('').map(x => parseInt(x));
//   new_arr = arr.reverse()
//   for (i = 0; i < new_arr.length; i++) {
//     plus += arr[i] + '+'
//     sum += new_arr[i]
//   }
//   plus = plus.slice(0, -1);
//   result = plus + '=' + sum
//   return typeof (result)
// }
// console.log(solution(718253))
a = '42+' + 52
console.log(a)