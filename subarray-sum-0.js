

let subWithZero = (arr)=>{
  for(let x= 0;x<arr.length;x++){
    let sum = arr[x]
    if(sum === 0){
      return true
    }

    for (let y=x;y<arr.length;y++){
      sum += arr[y]
      if(sum === 0){
        return true
      }
    }
  }

  return false 
}

let optimizeSubWithZero = (arr) => {
  let set = new Set()

  set.add(0)
  let sum = 0

  for(let x = 0;x<arr.length;x++){
    sum += arr[x]
    console.log("this is --",sum)
    if(set.has(sum)){
      return true
    }

    set.add(sum)
  }

  return false;
}



console.log(optimizeSubWithZero([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]))
console.log(subWithZero([3, 4, -7, 3, 1, 3, 1, -4, -2, -2]))