// Input:
// [3,4,-7,1,3,3,1,-4]
// k = 7

// Output:
// [3, 4]
// [3, 4, -7, 1, 3, 3]
// [1, 3, 3]
// [3, 3, 1]

const sumSubArray = (array, givenSum) => {
  for (let i = 0; i < array.length; i++) {
    let x = [];
    let sum = 0;
    for (let j = i; j < array.length; j++) {
      x.push(array[j])

      sum+=array[j]
      if(sum === givenSum){
        console.log(x)
      }
    }
  }
};

sumSubArray([3,4,-7,1,3,3,1,-4],7)
