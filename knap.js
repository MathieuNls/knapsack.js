
var items = [
  {w:12, v:5},
  {w:20, v:7},
  {w:5, v:12}
];

var r = knapsack(items, 30);

console.log(r);

// I have 680$ to invest
// I can buy up to 100 stock A at 50$
// I can buy up to 10 stock B at 80$
// I can buy up to 18 stock C at 12$
// Stock A will gain 10% next quarter.
// Stock B will loose 80% next quarter.
// Stock C will gain 220% next quarter.

items = [];

for (var i = 0; i < 100; i++) {
  items.push({w:50, v:50*1.1});
}

for (var i = 0; i < 10; i++) {
  items.push({w:80, v:80*0.2});
}

for (var i = 0; i < 18; i++) {
  items.push({w:12, v:12*2.2});
}

r = knapsack(items, 680);

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
