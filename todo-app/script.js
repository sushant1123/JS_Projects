const todoList = document.getElementById("todoList");
const addBtn = document.getElementById("addBtn");
const todoInput = document.getElementById("todoInput");

// let input = "";

const createListItem = (value) => {
  let item = document.createElement("li");

  let num = document.createElement("span");
  num.innerHTML = todoList.childNodes.length + 1;

  let content = document.createElement("div");
  content.innerHTML = value;

  item.appendChild(num);
  item.appendChild(content);

  return item;
};

const addToDo = (value) => {
  let todo = createListItem(value);
  todoList.appendChild(todo);
  console.log({ len: todoList.childNodes.length });
  todoInput.value = "";
};

addBtn.addEventListener("click", (e) => {
  let input = todoInput.value;

  if (input == "") {
    alert("please enter a note");
    return;
  }

  addToDo(input);
});
