//https://school.programmers.co.kr/learn/courses/30/lessons/12935

var solution = function (arr) {

  var a = Math.min.apply(null, arr);    //배열에서 최소값 구하기 //1
  if (arr.length == 1) {        //arr 요소가 한개일때 [-1] 출력
    return [-1]
  } else {
    var filter = arr.filter(function (data) {   //a가 아닌 요소만 재배열
      return data !== a;
    });
    // var filter = arr.filter(data => data !== a);

    return filter
  }
}

console.log(solution([4, 5, 6, 1, 9]));
console.log(solution([10]));
