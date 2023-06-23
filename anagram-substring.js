// Input:
// 'cbaebabacd'
// 'abc'

// Output:
// [0, 6]   
// 'cbaebabacd' is the anagram of 'abc' which starts at index 0
// 'cbaebabacd' is the anagram of 'abc' which starts at index 6

let reverse = (str) => {
  let x = [...str].sort().join('')
  return x
}

let anagram = (str,abc) => {
  let startIndex = []
  for(let x = 0;x<str.length;x++){
    let anagramCheck = ''
    for (let y = x;y<str.length;y++){
      anagramCheck = anagramCheck+str[y]
      console.log("anagr==",anagramCheck)
      if(anagramCheck.length>abc.length){
        break
      }
      if(reverse(anagramCheck) === abc){
        // console.log("anagr==",anagramCheck,x)
        startIndex.push(x)
      }
      // console.log(anagramCheck.localeCompare(abc))
    }
  }
  console.log(startIndex)
}

anagram('cbaebabacd','abc')