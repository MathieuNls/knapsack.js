
var items = [
  {w:12, v:5},
  {w:20, v:7},
  {w:5, v:12}
];

var r = knapsack(items, 30);

console.log(r);

/**
 * knapsack
 * @param  [{w:Number, v:Number}]   items
 * @param  capacity [description]
 */
function knapsack(items, capacity){
  var matrix = new Array(items.length+1);
  var matrixResultat = new Array(items.length+1);

  //var matrix = [items.length+1][capacity + 1];

  for (var i = 0; i < matrix.length; i++) {
    matrix[i] = new Array(capacity + 1);
    matrixResultat[i] = new Array(capacity + 1);
  }

  for (var i = 0; i <= items.length; i++) {
    for (var j = 0; j <= capacity; j++) {

      if(i == 0 || j == 0){
        matrix[i][j] = 0;

      }else if(items[i-1].w <= j){

        newMax = items[i-1].v + matrix[i-1][j-items[i-1].w];

        oldMax = matrix[i-1][j];

        matrix[i][j] = (newMax < oldMax) ? oldMax : newMax;
        matrixResultat[i][j] = (newMax < oldMax) ? 0 : 1;

      }else{

        matrix[i][j] = matrix[i-1][j];
      }
    }
    printMatrix(matrix);
    printMatrix(matrixResultat);
  }

  var resultat = [];

  resultat.push(matrix[matrix.length-1][matrix[0].length-1]);

  var j = capacity;
  for (var i = items.length; i > 0; i--){
    if(matrixResultat[i][j] == 1){
      resultat.push(items[i-1]);
      j = j - items[i-1].w;
    }
  }

  return resultat;
}

function printMatrix(matrix){
  for (var i = 0; i < matrix.length; i++) {
    var line = "";
    for (var j = 0; j < matrix[i].length; j++) {
      line += matrix[i][j] + ",";
    }
    console.log(line);
  }
}
