
function solution(lottos, win_nums) {
  const correct = lottos.filter((lotto) => win_nums.includes(lotto)).length;//겹치는게 2
  const zero = lottos.filter((lotto) => lotto === 0).length;//제로가 2

  const min = 7 - correct > 5 ? 6 : 7 - correct; //겹치는게 2개 7-2 5등 /겹치는게 1개나 0개일때 6등7등 모두 6등으로
  const max = min - zero < 1 ? 1 : min - zero; //5등에서 2빼면 3등 / 2등에서 2 빼면 0등이면 다 1등으로



  return [max, min]

}


console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]))