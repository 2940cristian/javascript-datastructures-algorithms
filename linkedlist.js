class Node {
    constructor(item) {
        this.item = item;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    peekList() {
        if(this.head === null) {
            console.log("There is no list")
        }

        else {
            let curr = this.head;
            let list = [];
            list.push(curr.item)

            while(curr.next) {
                curr = curr.next;
                list.push(curr.item);
            }
            return list;
        }
    }

    addToList(item) {
        const newNode = new Node(item);

        if(this.head === null) {
            this.head = newNode
            return
        }

        else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }

            curr.next = newNode;
            this.size = this.size+1;
            return;
        }
    }
}


const list = new LinkedList;

list.addToList("Hello world")
list.addToList("Its me")
list.addToList("Ya boy")
list.addToList("Javascript")


console.log(list.peekList())

