function solution(x) {
  let arr = (x + "").split("").map(x => parseInt(x));
  let sum = 0

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
  }

  return x % sum ? false : true
};
console.log(solution(10));
console.log(solution(13));
