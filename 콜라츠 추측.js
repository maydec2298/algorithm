function solution(num) {

  for (let i = 0; i < 500; i++) {
    if (i == 499 && num !== 1) {
      return -1
    } else if (num !== 1) {
      num = (num % 2 ? num * 3 + 1 : num / 2)
    } else if (num == 1) {
      return i
    }
  }
};
console.log(solution(16));
console.log(solution(6));
console.log(solution(626331));


