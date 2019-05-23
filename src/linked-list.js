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

        if (this._head == null){

                return null;
            }

        return this._head.data;
    }

    tail() {
        if (this._tail == null){

            return null;
        }
        return this._tail.data;

    }

    at(index) {
        return this._nodes[index].data;
    }

    insertAt(index, data) {

        var newNode = new Node(data, null, null);
        this._nodes.splice(index, 0, newNode);

        this.length ++;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }

    clear() {
        this._nodes = [];
        this._head = null;
        this._tail = null;
        this.length = 0;

        return this;

    }

    deleteAt(index) {
        this._nodes.splice(index, 1);
        this.length --;

        return this;
    }

    reverse() {

        var temp = this._tail;
        this._tail = this._head;
        this._head = temp;
        this._nodes.reverse();

        return this;
    }

    indexOf(data) {

        for (var i = 0; i < this.length; i++){
            if (this._nodes[i].data === data)
            {
                return i;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;
