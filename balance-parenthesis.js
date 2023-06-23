// Input:
// '[{}]'
// '[{}{}{}}]'

// Output:
// true
// false

function Stack(){
  let items = []

  this.push = (element) => {
    items.push(element)
  }

  this.pop = () => {
    return items.pop()
  }

  this.peek = () => {
    return items[items.length-1]
  }

  this.isEmpty = () => {
    return items.length === 0
  }

  this.size = () => {
    return items.length
  }
}


const balanceParenthesis = (givenParenthesis) => {
  const stack = new Stack()
  let closingTag = ''
  
  for(let x = 0;x<givenParenthesis.length;x++){
    // console.log(givenParenthesis[x])
    if(givenParenthesis[x]==='[' || givenParenthesis[x] === '{' || givenParenthesis[x] === '('){
      stack.push(givenParenthesis[x])
    }

    if(givenParenthesis[x] === ']' || givenParenthesis[x] === '}' || givenParenthesis[x] === ')'){
      if(stack.isEmpty()){
        console.log("wrong closing tag given ",givenParenthesis[x])
        return false
      }

      let temp = stack.pop()
      if(temp === "{" && givenParenthesis[x] != "}"){
        closingTag = '}'
        console.log("you missed the "+ closingTag)
        return false;
      }else if(temp === "[" && givenParenthesis[x] != "]"){
        closingTag = ']'
        console.log("you missed the "+ closingTag)
        return false
      }else if(temp === "(" && givenParenthesis[x] != ")"){
        closingTag = ')'
        console.log("you missed the "+ closingTag)
        return false
      }
    }
  }

  if(stack.isEmpty){
    return true;
  }else{
    console.log("you missed the "+ closingTag)
    return false
  }
};

console.log(balanceParenthesis('[}{}]'))
