class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class SLL{
    constructor(head=null){
        this.head = head;
    }
    

    push_to_front(data){
        if(this.head==null){
            this.head = new Node(data);
            return;
        }
        else{
            let next = this.head
            this.head = new Node(data);
            this.head.next = next
            return;
        }
    }
    pop_from_front(){
        if(this.head==null){
            return null;
        }
        else{
            let temp = this.head.data
            this.head = this.head.next
            return temp
        }
    }
    log(){
        if(this.head == null){
            console.log(null);
            return
        }
        else{
            console.log("*** start of list ***")
            let pointer = this.head;
            while(pointer != null){
                console.log(pointer.data);
                pointer = pointer.next;
            }
            console.log("*** end of list ***")
        }
    }
    contains(value){
        if(this.head == null){
            return false;
        }else{
            let pointer = this.head;
            while(pointer != null){
                if(pointer.data == value){
                    return true;
                }
                pointer = pointer.next;
            }
        }
        return false;
    }
    getMin(){
        if(this.head==null){
            return null;
        }else{
            let min = this.head.data;
            let pointer = this.head.next;
            while(pointer!=null){
                if(pointer.data < min){
                    min = pointer.data;
                }
                pointer = pointer.next;
            }
            return min;
        }
    }
    reverse(){
        // reverse the order of the singular linked list.
        if(this.head==null){
            return null;
        }else{
            let pointer = this.head;
            let prev = null;
            let next = null;
            while(pointer!=null){
                next = pointer.next;
                pointer.next = prev;
                prev = pointer;
                pointer = next;
            }
            this.head = prev;
        }
        return this;
    }
    // push(data){
    //     if(this.head==null){
    //         this.head = new Node(data);
    //         return;
    //     }else{
    //         let pointer = this.head;
    //         while(pointer.next != null){
    //             pointer = pointer.next;
    //         }
    //         pointer.next = new Node(data);
    //         return;
    //     }
    // }
}
//     pop(){
//         if(this.head==null){
//             return null;
//         }else{
//             let pointer = this.head;
//             let prev = null;
//             while(pointer.next != null){
//                 prev = pointer;
//                 pointer = pointer.next;
//             }
//             prev.next = null;
//             return pointer.data;
//         }
//     }
//     removeFront(){
//         if(this.head==null){
//             return null;
//         }else{
//             let temp = this.head.data;
//             this.head = this.head.next;
//             return temp;
//         }
//     }
//     front(){
//         if(this.head==null){
//             return null;
//         }else{
//             return this.head.data;
//         }
//     }
//     length(){
//         if(this.head==null){
//             return 0;
//         }else{
//             let count = 0;
//             let pointer = this.head;
//             while(pointer != null){
//                 count++;
//                 pointer = pointer.next;
//             }
//             return count;
//         }
//     }
//     display(){
//         if(this.head==null){
//             return null;
//         }else{
//             let pointer = this.head;
//             let str = "";
//             while(pointer != null){
//                 str += pointer.data + " ";
//                 pointer = pointer.next;
//             }
//             return str;
//         }
//     }
//     max(){
//         if(this.head==null){
//             return null;
//         }else{
//             let pointer = this.head;
//             let max = pointer.data;
//             while(pointer != null){
//                 if(pointer.data > max){
//                     max = pointer.data;
//                 }
//                 pointer = pointer.next;
//             }
//             return max;
//         }
//     }
//     min(){
//         if(this.head==null){
//             return null;
//         }else{
//             let pointer = this.head;
//             let min = pointer.data;
//             while(pointer != null){
//                 if(pointer.data < min){
//                     min = pointer.data;
//                 }
//                 pointer = pointer.next;
//             }
//             return min;
//         }
//     }

var sll = new SLL()
sll.push(10)
sll.push(15)
sll.push(18)
sll.log()
sll.push(7869)
sll.push(100)
sll.log()
sll.pop()
sll.log()
console.log(sll.contains(199))
sll.push_to_front(1)
sll.pop_from_front()
console.log(sll.getMin())
console.log(sll.reverse())