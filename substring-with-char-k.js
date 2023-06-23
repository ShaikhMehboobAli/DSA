// Input:
// 'abb' 
// 'b'

// Output:
// 5


let substringWithCharK = (arr,char) => {
  let count=0
  for (let x=0;x<arr.length;x++){
    for (let y=x;y<arr.length+1;y++){
      let sub = arr.slice(x, y);
      console.log(sub)
      if(sub.includes(char)){
        count++
      }
    }
  }

  console.log(count)
}

substringWithCharK('abcabc', 'a')