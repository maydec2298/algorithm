
// 1
let w_max = 0
let h_max = 0

function solution(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) {
      [sizes[i][0], sizes[i][1]] = [sizes[i][1], sizes[i][0]]
    }

  }

  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] > w_max) {
      w_max = sizes[i][0]
    }
    if (sizes[i][1] > h_max) {
      h_max = sizes[i][1]
    }
  }
  return w_max * h_max
}

// 2
function solution(sizes) {
  let new_arr = sizes.map(([w, h]) => h > w ? [h, w] : [w, h]);

  let max = [0, 0]
  new_arr.forEach(([w, h]) => {
    if (max[0] < w) { max[0] = w };
    if (max[1] < h) { max[1] = h };
  }
  )
  return max[0] * max[1];
};

console.log(solution([[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]))
