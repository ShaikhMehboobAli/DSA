// Stacks

// Function available: push, pop, peek, length, isEmpty, clear 

function Stack(){
    var items = []

    // Push an item in the stack 
    this.push = (element) => {
        items.push(element)
    }

    // Pop an item from the Stack 
    this.pop = () => {
        return items.pop()
    }

    // Peek top item from the Stack 
    this.peek = () => {
        return items[items.length-1];
    }

    // Is Stack empty
    this.isEmpty = () => {
        return items.length === 0;
    }

    // Clear the stack
    this.clear = () =>{
        items.length = 0;
    }

    // Size of the stack 
    this.size = () => {
        return items.length
    }
}


let stack  = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.peek());
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.pop())
console.log(stack.size())
stack.clear()
console.log(stack.isEmpty())