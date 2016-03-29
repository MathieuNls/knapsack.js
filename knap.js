
var items = [
  {w:12, v:5},
  {w:20, v:7},
  {w:5, v:12}
];

var r = knapsack(items, 30);

console.log(r)

/**
 * knapsack
 * @param  [{w:Number, v:Number}]   items
 * @param  capacity [description]
 */
function knapsack(items, capacity){
  var i, j;
  var matrix = new Array(items.length+1);

  //var matrix = [items.length+1][capacity + 1];

  for (var i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(capacity + 1);
  }

  for (var i = 0; i <= items.length; i++) {
    for (var j = 0; j <= capacity; j++) {
      console.log(matrix[i][j]);

      console.log(items[i-1]);
      console.log(i + " " + j);

      if(i == 0 || j == 0){
        matrix[i][j] = 0;

      }else if(items[i-1].w <= j){

        newMax = items[i-1].v + matrix[i-1][j-items[i-1].w];

        oldMax = matrix[i-1][j];

        matrix[i][j] = (newMax < oldMax) ? oldMax : newMax;

      }else{

        matrix[i][j] = matrix[i-1][j];
      }
    }
  }

  return matrix[matrix.length-1][matrix[0].length-1];

}
