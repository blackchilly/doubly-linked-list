const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        this._nodes = [];

    }

    append(data) {
        var newNode = new Node(data, null, null);

        if (this.length == 0){

            this._head = newNode;
        }

        this._tail = newNode;

        this._nodes.push(newNode);

        this.length++;

    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;

    }

    at(index) {
        return this._nodes[index].data;
    }

    insertAt(index, data) {

        var newNode = new Node(data, null, null);
        this._nodes.splice(index, 0, newNode);
    }

    isEmpty() {


    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
