//Selection Sort
let array = [6, 2, 5, 3, 7, 4, 1];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minValue = array[i];
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[i]) {
        minValue = array[j];
        minIndex = j;

        let temp = array[i];
        array[i] = minValue;
        array[j] = temp;
      }
    }
  }

  return array;
}

console.log(selectionSort(array));
