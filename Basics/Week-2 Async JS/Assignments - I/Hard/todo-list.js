class Todo{

    constructor(){
        this.list = [];
    }

    add(todo){
        this.list.push(todo);
    }

    remove(index){
        if(index >= 0 && index < this.list.length) this.list.splice(index, 1); //to remove an element from the array use splice
    }

    update(index, todo){
        if(index >= 0 && index < this.list.length){
            this.list[index] = todo;
        }
    }

    getAll(){
        return this.list;
    }

    get(index){
        if (index >= 0 && index < this.list.length) {
            return this.list[index];
        }
        else{
            return null;
        }
    }
    clear(){
        this.list = [];
    }
}

module.exports = Todo;