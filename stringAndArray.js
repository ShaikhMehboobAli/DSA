const findMinMax = (arr) => {
  let x = arr[0];
  let y = arr[0];

  for(let i = 0;i<arr.length;i++){
    if(arr[i]>x){
      x = arr[i]
    }else if(arr[i]<y){
      y = arr[i]
    }
  }

  return {x,y}
}

const arr = [1, 423, 6, 46, 34, 23, 13, 53, 4];
let {x,y} = findMinMax(arr)
console.log(x,y)



const reverseArray = (arr) => {
  let start = 0;
  let end = arr.length-1
  while(start<end){
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp;
    start++;
    end--
  }

  return arr;
}

console.log('reverse---',reverseArray([1, 2, 3, 4, 5, 6 ]))


const kthLargestNumber = (arr) => {
  arr = arr.sort()
  let kthSmallest = arr[0]
  let kthLargest = arr[arr.length-1]
  console.log(kthSmallest,kthLargest)
}

kthLargestNumber([8, 9, 3, 7, 1, 6 ])

let rearrange = (arr) => {
  let j = 0
  let last = 0
  for(let x = 0;x<arr.length;x++){
    if(arr[x]<0){
      
      if(x != j){
        // console.log('t',arr[x],+' '+j)
        [arr[x],arr[j]] = [arr[j],arr[x]]
        // if( arr[x]<last){
        //   [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
        // }
      }
      
     
      j++
    }
  }

  console.log("-ve in left side ----",arr)
}

rearrange( [-1, 2, -7, 4, 5, -9, -3, 8, 9])


function findMissing(arr,N){
  let i;
  let temp = [];
  for (i = 0; i <= N; i++) {
            temp[i] = 0;
        }
        console.log("temp1--",temp)
 
        for (i = 0; i < N; i++) {
            temp[arr[i] - 1] = 1;
            console.log("check--",arr[i]-1)
        }
        console.log("temp2--",temp)

 
        let ans = 0;
        for (i = 0; i <= N; i++) {
            if (temp[i] == 0)
                ans = i + 1;
        }
        console.log("fins missing--",ans);
}
 
 
        // Function call
       findMissing([ 25,32,29,26,30,27],6);