const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener("click", function () {
  //Create an a li out of thin air
  const newLi = document.createElement("li");
  const liContent = document.createTextNode(listInput.value);
  //Add the input value inside that new li
  newLi.appendChild(liContent);
  //Attaching the li to the user list
  userList.appendChild(newLi);
  // empty input
  listInput.value = "";
  // focus input
  listInput.focus();
});

listInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    addListBtn.click();
  }
});
