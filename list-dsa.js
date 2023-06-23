// List

/*  
    @Function available: 
     size() ==> Returns the size of the list.
     clear() ==> Clears the list.
     print()   ==> Prints all the items of the list.
     getElement()    ==> Returns the item at the current position in the list.
     inset()    ==> Inserts a new item after the given item in the list.
     append() ==>  Adds a new item on the top of the list.
     remove() ==> Removes the given item from the list.
     front() ==> Moves the position to the first item in the list.
     rear() ==> Moves the position to the last item in the list.
     prev() ==> Moves the position to the previous item in the list.
     next() ==> Moves the position to the next item in the list.
     currPos() ==> Returns the current position in the list.
     moveTo() ==> Moves to the specific position in the list.
     contains() ==> Check if item is present in the list.
*/

function List() {

  this.listSize = 0;
  this.position = 0;
  this.items = [];

  this.append = (element) => {
    this.items[this.listSize++] = element
  }

  this.find = (element) => {
    for(let x=1; x<this.listSize; x++){
      if(this.items[x] === element){
        return x
      }
      return -1;
    }
  }

  this.remove = (element) => {
    let index = this.items.find((ele=>ele===element))

    if(index > -1){
      this.items.splice(index,1);
      --this.listSize;
      return true;
    }
  }


  this.insert = (element,after) => {
    let insertPos = this.find(after);
    
    if(insertPos > -1){
      this.items.splice(insertPos+1,0,element)
      ++this.listSize;
      return true 
    }

    return false
  }

  this.contains = (element) => {
    let index = this.find(element)
    return index > -1 ? true : false
  }

  this.front = () => {
    this.position = 0;
  }

  this.rear = () => {
    this.position = this.listSize - 1
  }

  this.prev = () => {
    if(this.position > 0) {
      --this.position
    }
  }

  this.next = () => {
    if(this.position < this.listSize - 1){
      ++this.position
    }
  }

  this.currPos = () => {
    return this.position
  }

  this.moveTo = (pos) => {
    if(pos>0 && pos<=this.listSize){
      this.position = pos - 1
    }
  }

  this.getElement = () => {
    return this.items[this.position]
  }


  this.size = () => {
    return this.listSize
  }


  this.print = () => {
    return this.items.join(',')
  }

  this.clear = () => {
    this.listSize = 0;
    this.position = 0;
    this.items = []
  }
}





let list = new List();
list.append('Prashant');
list.append('Taha');
list.append('Anil');

list.insert('Yogesh', 'Taha');
console.log(list.print()); //print all the items of the string.
console.log(list.getElement());

list.next();  //move to next item
console.log(list.getElement());

list.rear(); //move to last item
console.log(list.getElement());

list.prev(); //move to prev item
console.log(list.getElement());

console.log(list.size());  //get the size of the list

list.remove('Taha');
console.log(list.size());  //get the size of the list
console.log(list.print()); //print all the items of the string.