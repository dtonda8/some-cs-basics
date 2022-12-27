class LinkedList {
    constructor(headNode) {
        this.headNode = headNode;
    }

    append(value) {
        let currentNode = this.headNode;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = value;
    }

    prepend(value) {
        value.nextNode = this.headNode;
        this.headNode = value;
    }

    size() {
        let size = 1;
        let currentNode = this.headNode;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            size++;
        }
        return size;
    }

    head() {
        return this.headNode 
    }

    tail() {
        let currentNode = this.headNode;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    at(index) {
        let currentNode = this.headNode;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        return currentNode;
    }

    pop() {
        let currentNode = this.headNode;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
        }
        currentNode = null;
    }

    contains(value) {
        let currentNode = this.headNode;
        if (currentNode === value) return true;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            if (currentNode === value) return true;
        }
        return false;      
    }

    find(value) {
        let currentNode = this.headNode;
        if (currentNode === value) return 0;
        let index = 0;
        while (currentNode.nextNode) {
            index++;
            currentNode = currentNode.nextNode;
            if (currentNode === value) return index;
        }
        return null;
    }

    toString(){
        let currentNode = this.headNode;
        let string = `( ${currentNode.value} ) -> `;
        while (currentNode.nextNode) {
            currentNode = currentNode.nextNode;
            string += `( ${currentNode.value} ) -> `;
        }
        string += 'null'
        return string;
    }

}

class Node {
    constructor(value, nextNode=null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

// Tests
let n1 = new Node(1)
let ll = new LinkedList(n1)
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);

n1.nextNode = n2;
n2.nextNode = n3;
n3.nextNode = n4;

// console.log(ll.toString())
