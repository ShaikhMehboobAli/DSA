// Queue

/*  
    @Function available: 
     enqueue() ==> Adds an item at the tail of the queue., 
     dequeue() ==> Removes an item from the head of the queue., 
     front()   ==> Returns the first item in the queue., 
     rear()    ==> Returns the last item in the queue.
     size()    ==> Returns the size of the queue., 
     isEmpty() ==> Returns true if queue is empty, false otherwise.
*/

function Queue() {
  let items = [];

  // Add a new element in queue
  this.enqueue = (element) => {
    items.push(element);
  };

  // Remove element from the queue
  this.dequeue = () => {
    return items.shift();
  };

  // Return the first element from the queue
  this.front = () => {
    return items[0]
  };

  // Return the last item in the queue
  this.rear = () => {
    return items[items.length-1]
  }

  // Return the size of the queue
  this.size = () => {
    return items.length
  }

  // Check if the queue is empty
  this.isEmpty = () => {
    return items.length == 0
  }
}
