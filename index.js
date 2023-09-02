const input = document.getElementById("input");
const listContainer = document.getElementById("taskList");
function task() {
  if (input.value === "") {
    alert("Enter Task Please");
  } else {
    let list = document.createElement("li");
    list.innerHTML = input.value;
    listContainer.appendChild(list);
    let cancel = document.createElement("span");
    cancel.innerHTML = "❌";
    list.appendChild(cancel);
  }
  input.value = "";
  saveList();
}
listContainer.addEventListener(
  "click",
  function (e) {
    e.target.tagName === "LI"
      ? e.target.classList.toggle("checked")
      : e.target.tagName === "SPAN"
      ? e.target.parentElement.remove()
      : " ";
    saveList();
  },
  false
);

function saveList() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showList();
