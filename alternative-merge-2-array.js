// [1, 2, 3, 4, 5, 6, 7 , 8]
// [11, 22, 33, 44]

// Output:
// [1, 11, 2, 22, 3, 33, 4, 44, 5, 6, 7, 8]


let count = () => {

}
let l = 0;
let m= 0;
let temp = []

let alternativeMerge = (arr1,arr2) => {
  // let i = 0
  // let j=0

  if(arr1.length>l || arr2.length>m){
    if(arr1.length>l){
      temp.push(arr1[l])
      l++;
    }
    if(arr2.length>m){
      temp.push(arr2[m])
      m++;
    }
    console.log('====================================');
    console.log(l,m,temp);
    console.log('====================================');
    alternativeMerge(arr1,arr2)
  }
}

alternativeMerge([1, 2, 3, 4, 5, 6, 7 , 8],[11, 22, 33, 44])
