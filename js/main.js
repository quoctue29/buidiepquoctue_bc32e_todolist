import { ToDo } from "./todo.js";
import { ToDoList } from "./todolist.js";

let tList = new ToDoList();
let completeList=new ToDoList();
const getEle = (id) => {
  return document.getElementById(id);
};
const ShowToDo = (getelt,list) => {
    getelt.innerHTML= list.reduceRight((content, item,index) => {
      content += `
      <li>
          <span>${item.text}</span>
          <div class="buttons">
              <button data-index="${index}" data-status=${item.status} onclick="RemoveToDo(event)"><i class="fa fa-trash-alt"></i></button>
              <button data-index="${index}" data-status=${item.status} onclick="convertToDotoComplete(event)"><i class="fa fa-check-circle"></i></button>
          </div>
      </li>`;
      return content;
    }, "");
    
  }
  window.AddToDo = () => {
  let textToDo = getEle("textToDo").value;
  if (String(textToDo).trim().length === 0) return;

  let toDo = new ToDo(textToDo, "todo");
  tList.addToDo(toDo);

    ShowToDo(getEle("todo"),tList.toDoList)
    getEle("textToDo").value='';
};


window.RemoveToDo=(e)=>{
    let index=e.currentTarget.getAttribute("data-index");
    let status=e.currentTarget.getAttribute("data-status");

    if(status==="todo"){
        tList.removeToDo(index);
        ShowToDo(getEle("todo"),tList.toDoList)
    }
    else {
        completeList.removeToDo(index);
        ShowToDo(getEle("complete"),completeList.toDoList)
    }

    

}


window.convertToDotoComplete=(e)=>{
    console.log(e.target);
    console.log(e.currentTarget);

    let index=e.currentTarget.getAttribute("data-index");
    
    let status=e.currentTarget.getAttribute("data-status");
    if(status==='todo'){
        let todo=new ToDo(tList.toDoList[index].text,"complete");
        tList.removeToDo(index);
        completeList.addToDo(todo)
        ShowToDo(getEle("todo"),tList.toDoList);
        ShowToDo(getEle("complete"),completeList.toDoList);

    }
    if(status==='complete'){
        let todo=new ToDo(completeList.toDoList[index].text,"todo");
        completeList.removeToDo(index);
        tList.addToDo(todo);
        ShowToDo(getEle("todo"),tList.toDoList);
        ShowToDo(getEle("complete"),completeList.toDoList);

    }
    
}


window.sortToDoList=(isDES)=>{
    tList.sortToDoList(isDES);
    completeList.sortToDoList(isDES);
    ShowToDo(getEle("todo"),tList.toDoList);
    ShowToDo(getEle("complete"),completeList.toDoList);

}