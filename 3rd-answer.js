// No 3. Create some functions to find mean, median, and mode value of array.

// Mean Function
function mean(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += parseFloat(array[i]);
  }

  return console.log("Mean: " + sum / array.length);
}

mean([10, 3, 1]);

// Median Function
function median(array) {
  let median = array.length / 2;
  for (let i = 0; i < array.length; i++) {
    if (array.length % 2 === 0) {
      // Data array genap
      return console.log("Median:", (array[median] + array[median - 1]) / 2);
    } else {
      // Data array ganjil
      return console.log("Median:", array[median - 0.5]);
    }
  }
}

median([8, 8, 10, 9]);

// Mode Function
function mode(array) {
  let frequence = 0;
  let greaterFrequence = 0;
  let mode = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j] && i !== j) {
        frequence++;
      }
      if (frequence > greaterFrequence) {
        greaterFrequence = frequence;
        mode = i;
      }
    }
  }

  if (mode === 0) {
    return console.log("Mode: No mode was found!");
  }

  var sameNumber = 0;
  for (var k = 0; k < array.length; k++) {
    sameNumber += array[k];
    if (sameNumber / array.length === array[k]) {
      return console.log("Mode: The numbers are same");
    }
  }
  return console.log("Mode:", array[mode]);
  // you can only write your code here!
}

mode([2, 2, 3, 2, 9, 8]); //mode: 2
