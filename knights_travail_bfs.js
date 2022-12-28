const HEIGHT = 8;
const WIDTH = 8;

class Queue {
    constructor(list=[]){
        this.queue = list;
    }

    enqueue(element){
        if (Array.isArray(element)) {
            this.queue = this.queue.concat(element)
        } else {
            this.queue.push(element);
        }
    }

    dequeue(){
        return this.queue.shift();
    }
}


class Node {
    constructor(position, parentNode=null){
        this.pos = position;
        this.parentNode = parentNode;
    }
}


function isArrayInArray(arr, item){
    var item_as_string = JSON.stringify(item);
  
    var contains = arr.some(function(ele){
      return JSON.stringify(ele) === item_as_string;
    });
    return contains;
  }


function findIndexOfArray(array, item){
    let arrayLength = array.length;
    for (let i = 0; i < arrayLength; i++){
        let currentArray = array[i];
        if (currentArray[0] === item[0] && currentArray[1] === item[1]) return i;
    } 
    return -1;
}


function getEdgesTo(positionNode) {
    let position = positionNode.pos
    let edgesTo = [];
    let pos_x = position[0];
    let pos_y = position[1];

    if (pos_x - 1 >= 0 && pos_y - 2 >= 0) edgesTo.push([pos_x - 1, pos_y - 2]);
    if (pos_x - 1 >= 0 && pos_y + 2 < HEIGHT) edgesTo.push([pos_x - 1, pos_y + 2]);
    if (pos_x + 1 < WIDTH && pos_y - 2 >= 0) edgesTo.push([pos_x + 1, pos_y - 2]);
    if (pos_x + 1 < WIDTH&& pos_y + 2 < HEIGHT) edgesTo.push([pos_x + 1, pos_y + 2]);

    if (pos_x - 2 >= 0 && pos_y - 1 >= 0) edgesTo.push([pos_x - 2, pos_y - 1]);
    if (pos_x - 2 >= 0 && pos_y + 1 < HEIGHT) edgesTo.push([pos_x - 2, pos_y + 1]);
    if (pos_x + 2 < WIDTH && pos_y - 1 >= 0) edgesTo.push([pos_x + 2, pos_y - 1]);
    if (pos_x + 2 < WIDTH&& pos_y + 1 < HEIGHT) edgesTo.push([pos_x + 2, pos_y + 1]);

    return edgesTo.map(pos => new Node(pos, positionNode));
}


function knightMoves(initialPosition, finalPosition){
    positions = new Queue([new Node(initialPosition)]);
    let isFinalPositionReached = false;

    while (!isFinalPositionReached){
        queueLength = positions.queue.length;
        for (let i = 0; i < queueLength; i++){
            edges = getEdgesTo(positions.queue[i]);
            positions.enqueue(edges);
            positions.dequeue();
        }

        edgesPositions = positions.queue.map(nodePosition => nodePosition.pos);
        finalPositionIdx = findIndexOfArray(edgesPositions, finalPosition);

        if (finalPositionIdx !== -1){
            isFinalPositionReached = true;
        }
    }

    let moves = [];
    let currentPositionNode = positions.queue[finalPositionIdx];

    while (currentPositionNode){
        moves.push(currentPositionNode.pos);
        currentPositionNode = currentPositionNode.parentNode;
        
    }

    //Format display to user
    let numberOfMoves = moves.length;
    console.log(`You made it in ${numberOfMoves} moves!  Here's your path:`)
    for (let i = 0; i < numberOfMoves; i++){
        console.log(moves[i]);
    }
} 

// Tests
knightMoves([7, 0], [0, 7])
