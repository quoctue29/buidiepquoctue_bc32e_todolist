export class ToDoList{
    constructor(){
        this.toDoList=[];
    }
    addToDo(todo){
        this.toDoList.push(todo);
    }
    removeToDo(index){
        this.toDoList.splice(index,1);
    }
    sortToDoList(isDES) {
        if(isDES){

          return  this.toDoList.sort((a, b) => b.text.toLowerCase().localeCompare(a.text.toLowerCase()));
        }
       else
           return this.toDoList.reverse();
    }
}