// prettyPrint from the Odin Project
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  }

class Node {
    constructor(value, left=null, right=null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(arr){
        this.arr = arr;
        this.root = this.buildTree()

    }

    buildTree(){
        // Prep array
        let array = this.arr;
        array.sort()
        this.arr = [...new Set(array)];

        // Base cased: 
            //if array contains only 1 element, return it as a node 
            // else if array is empty return null
        if (this.arr.length === 0) return null;
        if (this.arr.length === 1) return new Node(this.arr[0]);

        // Recursive Case: recursively call buildTree() method for left and right subtrees
        let midIdx = Math.round((this.arr.length - 1)/2);
        let treeLeft = new Tree(this.arr.slice(0, midIdx));
        let treeRight = new Tree(this.arr.slice(midIdx + 1));
        let root =  new Node(this.arr[midIdx], treeLeft.root, treeRight.root);
        return root;
    }
}


// Tests
let array;
// array = [1, 2, 3, 4];
array = [1, 2, 3, 4, 5];
let tree = new Tree(array);
let treeRoot = tree.root;
tree.insert(6)

prettyPrint(treeRoot)
