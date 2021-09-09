document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", function(e){
      console.log(e)
      e.preventDefault();
      buildToDo();
      form.reset();      
  })
});

//delete button and task
function btnDelete(e) {
  e.target.parentNode.remove()
}

//add new DOM elements - paragraph and button
function buildToDo(){
  let p = document.createElement("p");
  p.textContent = document.getElementById("new-task-description").value + " ";

  let priority = document.querySelector("select").value;
  let clr = colorTask(priority);
  
  p.style.color = clr;
  console.log(p.color);
  console.log(clr);
  let btn = document.createElement("button");
  btn.textContent = "X";
  p.appendChild(btn);
  btn.addEventListener("click", btnDelete);
  document.getElementById("tasks").appendChild(p);
}

function colorTask(pr) {
  if (pr == "High") {
    return ("red")
  }
  else if (pr == "Medium") {
    return "yellow"
  }
  else {
    return "green"
  }
}