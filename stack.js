class Stack {
    constructor() {
        this.arr = [];
    }

    push(item) {
        this.arr.push(item)
        return this.arr;
    }

    pop() {
        this.arr.pop();
        return this.arr;
    }

    peek() {
        return this.arr[this.arr.length-1]
    }
}

let stackinpractice = new Stack

console.log(stackinpractice.push("hello"));
console.log(stackinpractice.push("its"));
console.log(stackinpractice.push("me"));

console.log(stackinpractice.peek())

console.log(stackinpractice.pop())

// FIRST IN LAST OUT
