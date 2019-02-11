class Queue {
    constructor() {
        this.arr = [];
    }

    push(item) {
        this.arr.push(item);
        return this.arr;
    }

    pop() {
        this.arr.shift();
        return this.arr;
    }

    peek() {
        return this.arr[0]
    }
}

let queueInPractice = new Queue

console.log(queueInPractice.push("hello"));
console.log(queueInPractice.push("its"));
console.log(queueInPractice.push("me"));

console.log(queueInPractice.peek())

console.log(queueInPractice.pop())

// FIRST IN FIRST OUT