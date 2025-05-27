class learningstack{
    constructor(){
        Array.items=[];
    }

    push(...element){  //...use korle multiple things ekshathe push korte parbo
    // just ele dile single number push korte parbo
        Array.items.push(...element);
    }
    pop(){
        if(Array.items.length === 0){
            return "stack is empty";
        }
        return Array.items.pop();
    }
    peek(){
        return Array.items[Array.items.length -1];
    }
}

const learningstack01 = new learningstack;
learningstack01.push(10);
learningstack01.push(50);
learningstack01.push(70,90,100);
console.log(learningstack01.peek());

learningstack01.pop();
console.log(learningstack01.peek());
