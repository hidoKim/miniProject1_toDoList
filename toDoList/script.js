const listform = document.getElementById("listform");
const todoList = document.getElementById("todoList");
const textInput = document.getElementById("textInput");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

