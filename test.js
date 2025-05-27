// class stack{
//     constructor(){
//         this.items = [];
//     }

//     push(...elements){
//         this.items.push(...elements);
//     }
//     pop(){
//         if(this.items.length === 0){
//             return "Stack is empty";
//         }
//         return this.items.pop();
//     }
//     peek(){
//         return this.items[this.items.length -1];
//     }
// }

// const abc = new stack;
// abc.push(10,20,30,40);
// console.log(abc.peek());
// abc.pop();
// console.log(abc.peek())


// //
//  let queue = []; 
// queue.push("a"); 
// queue.push("b"); 
// queue.push("c"); 
// queue.shift(); 
// queue.shift(); 
// console.log(queue);  

//Write a function printStack that prints all elements of a stack (implemented as an array) from top to bottom.

class stack{
    constructor(){
        this.items=[];
    }
    push(...elements){
        this.items.push(...elements);
    }
    peek(){
        return this.items[this.items.length -1];
    }

    printStack(){
    for(let i=this.items.length -1; i>=0; i--){
        console.log(this.items[i]);
    }
}

}

const xyz = new stack;
xyz.push(10,20,30,40);
console.log(xyz.peek());
xyz.printStack();

// console.log();

