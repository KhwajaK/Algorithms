// Fronts
// Use classes, attributes, and methods in the JavaScript language for all challenges. Use only a single JavaScript file for this assignment. All examples are done in order, starting with a new instance of the SLL class.

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
}
// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
    addFront(value) {
        var newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
        if (this.head == null) {
            return this.head;
        }
        var removeNode = this.head;
        this.head = removeNode.next;
        removeNode.next = null;
        return this.head;
    }

// Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
    front() {
        if (this.head == null) {
            return null;
        } else {
            return this.head.data;
        // return this.head ? this.head.data : null;
    }
}
// Create display() that uses a while loop and a runner to return a string containing all list values. Build what you wish console.log(myList) did!
    display() {
        var runner = this.head;
        var str = "";
        while (runner != null) {
            str += runner.data + " ";
            runner = runner.next;
        }
        return str;
    }

}

var SLL1 = new SLL();
console.log(SLL1.front())
SLL1.addFront(18)
console.log(SLL1.front())
// SLL1.addFront(5) 
// console.log(SLL1)
SLL1.addFront(73) 
console.log(SLL1.display())
// SLL1.removeFront() 
console.log(SLL1)
// SLL1.front(18) 
// console.log(SLL1)
// SLL1.front() 




// Here is the explanation for the code above:
// 1. We are creating a class called SLL (stands for Singly Linked List)
// 2. The constructor function is what is called when we type in "new SLL()" and creates a new instance with a property called "head"
// 3. We add a method to the prototype called "addFront" that is a function that takes in a value as a parameter. 
// 4. Inside the function, we instantiate a new node and set it to a variable called "newNode"
// 5. We set the newNode's next property to the head of the list
// 6. We set the head of the list to the newNode
// 7. Finally, we return the head of the list