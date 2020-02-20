// No 2. Printer Machine

function print(array, index) {
  var print = [];
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < index.length; j++) {
      if (i == j && index[j] == true) {
        print.push(array[i]);
      }
    }
  }
  return `${print}`;
}
console.log(print(["A", "B", "C", "D", "E"], [true, false, true, false, true])); //A, C, E
