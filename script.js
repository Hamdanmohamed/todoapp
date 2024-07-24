let userinput = document.getElementById("task");
let addTask = document.getElementById("task-form");
let seatchlist = document.getElementById("search");
let cleartask = document.getElementById("btn-test");
let unorderlist = document.querySelector(".collection");
// let particularremove = document.getElementById(".fa fa-remove")

function allTaskloadings() {
  document.addEventListener("DOMContentLoaded", loadedTaskload);
  addTask.addEventListener("submit", taskadd);
  cleartask.addEventListener("click", taskclear);
  unorderlist.addEventListener("click", paricularremove);
}

allTaskloadings();

function taskadd(e) {
  e.preventDefault();
  if (userinput.value == "") {
    alert("please enter the task");
  } else {
    //create a li
    let li = document.createElement("li");
    //add classname
    li.className = "collection-item";
    //add userinput
    li.innerText = userinput.value;
    //create a a tag
    let anchor = document.createElement("a");
    //add classname
    anchor.className = "delete-item secondary-content";
    //add innerhtml
    anchor.innerHTML = ` <i class="fa fa-remove"></i>`;
    //add li to a tag
    li.append(anchor);
    //ul into li
    unorderlist.append(li);
    //local storage
    localStorageprocess(userinput.value);
    //all process input box empty
    userinput.value = "";
  }
}

function localStorageprocess(task) {
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function taskclear() {
  let allli = document.querySelectorAll(".collection-item");
  console.log(allli);
  allli.forEach((element) => {
    element.remove();
  });
  clearlocalStorage();
}

function paricularremove(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    e.target.parentElement.parentElement.remove();
    localremoveparticular(e.target.parentElement.parentElement.innerText);
  }
}



function localremoveparticular(li) {
  console.log(li);
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    tasks.forEach(function (element, index) {
      if (li != element) {
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
}

function loadedTaskload() {
  let tasks;
  if (localStorage.getItem("tasks") == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.forEach(function (element) {
      //create a li
      let li = document.createElement("li");
      //add classname
      li.className = "collection-item";
      //add userinput
      li.innerText = element;
      //create a a tag
      let anchor = document.createElement("a");
      //add classname
      anchor.className = "delete-item secondary-content";
      //add innerhtml
      anchor.innerHTML = ` <i class="fa fa-remove"></i>`;
      //add li to a tag
      li.append(anchor);
      //ul into li
      unorderlist.append(li);
    });
  }
}
function clearlocalStorage() {
  localStorage.clear();
}


// console.log(window)

// function a(){
//     console.log(window)
// }
// a()
// function b(){
//     console.log(window)
// }
// b()
let person ={
    name: 'John',
    greet:function(){
        console.log(this)
        var nammm=function(){
            this.name=nammm
        }
        nammm("kkkk")
    }

}
console.log(person.name)