// Input:
// console.log(selectionSort([1, 8, 2, 4, 5]));

// Output:
// [1, 2, 4, 5, 8]


let selectionSort = (arr) => {
  for(let x = 0;x<arr.length;x++){
    for (let y = x+1;y<arr.length;y++){
      if(arr[y]<arr[x]){
        [arr[x],arr[y]] = [arr[y],arr[x]]
      }
    }
  }

  console.log('====================================');
  console.log(arr);
  console.log('====================================');
}

selectionSort([1, 8, 2, 4, 5])

