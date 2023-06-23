// List

/*  
    @Function available: 
     append(element) ==> Adds a new element in the list.
     removeAt(position) ==> Removes an element from the given position in the list and returns it.
     insert(position, element)  ==> Adds an element at the given position in the list.
     toString()    ==> Joins all the elements of the list and returns it as a string.
     toArray()    ==> Converts the linked list to the array and returns it.
     indexOf(element) ==>  Returns the position of the given element in the list.
     delete(element) ==> Removes the given element from the list.
     deleteHead() ==> Removes the first element from the list.
     deleteTail() ==> Removes the last element from the list.
     isPresent(element) ==> Returns true if element is present in the list, false otherwise.
     isEmpty() ==> Returns true if the list is empty, false otherwise.
     size() ==> Returns the size of the list.
     getHead() ==> Returns the whole list.
*/

// function LinkedList() {
//   let Node = function(element){
//     this.element = element
//     this.next = null;
//   }

//   let length = 0;

//   let head = null;

//   // Add new item in the linkedlist
//   this.append = (element) => {
//     let node = new Node(element),current;

//     if(head === null) {
//       head = node;
//     }else{
//       current = head;
//       while(current.next){
//         current = current.next;
//       }

//       current.next = node
//     }

//     length++;
//   }

//   // Remove item from any position
//   this.removeAt = (position) => {
//     if(position > -1 && position <length){
//       let current = head, previous, index = 0;

//       if(position === 0){
//         head = current.next;
//       }else{
//         while(index++ < position){
//           previous = current;
//           current = current.next
//         }

//         previous.next = current.next
//       }

//       length--;
//       return current.element
//     }else{
//       return null
//     }
//   }

// }

// --------------------

function LinkedList() {
  let Node = function (elm) {
    this.element = elm;
    this.next = null;
  };

  // keep track of size
  let length = 0;
  // keep track of list
  let head = null;



  this.append = (ele) => {
    let node = new Node(ele),
      current;

    // if head is empty then add the node at beginning
    if (head === null) {
      head = node;
    } else {
      //else add the node as the next element of the existing list
      current = head;
      console.log('====================================');
      console.log(current);
      console.log('====================================');
      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    length++;
  };



  this.removeAt = function(pos){
    if(pos>-1 && pos<length){
      let current = head,previous,index=0;
      
      // if removing the first element then simply point to the next element 
      if(pos === 0){
        head = current.next;
      }else{
        // else find the correct position and the remove the element 
        while(index++ < pos){
          previous = current;
          current = current.next;
        }
        console.log('====================================');
        console.log(previous,current);
        console.log('====================================');
        previous.next = current.next
      }

      length --;
      return current.element;
    }
  }



  this.inset = (pos,elm) => {
    if(pos >=0 && pos<=length){
      let node = new Node(elm),current = head,previous,index=0;

      if(pos === 0){
        node.next = current;
        head = node;
      }else{
        while(index++ < pos){
          previous = current;
          current = current.next
        }

        node.next = current;
        previous.next = node
      }

      length++;
      return true
    }else{
      return false
    }
  }


  this.isPresent = (elm) => {
    return this.indexOf(elm)
  }


  this.delete = (elm) => {
    return this.removeAt(this.indexOf(elm))
  }


  // delete the first element from the list 
  this.deleteFirstEle = () => {
    let current = head;
    if(current === null){
      return true
    }

    if(current.next){
      current = current.next
      head = current
    }else{
      head = null;
    }

    return true
  }

  // delete the last element from the list 
  this.deleteLastEle = () => {
    let current = head;
    if(current === null){
      return true
    }

    while(current.next){
      if(!current.next.next){
        current.next = null;
      }else{
        current = current.next;
      }
    }

    return true
  }



  this.indexOf = (elm) => {
    let current = head,index=-1

    // if element found then return its position 
    while(current){
      if(elm === current.element){
        return ++index
      }
    }
  }



  this.toArray = () => {
    let current = head
    let arr = []

    if(length === 0){
      return []
    }
    while(current){
      arr.push(current.element)
      current = current.next
    }

    return arr
  }




  this.toString = () => {
    let current = head,
      string = "";

    while (current) {
      string += current.element + (current.next ? "\n" : "");
      current = current.next;
    }

    return string;
  };
}

let ll = new LinkedList();

ll.append("prashant");
ll.append("surfu");
ll.append("anil");
ll.removeAt(1);
ll.append("anil");
ll.toArray()
console.log(ll.toArray());
