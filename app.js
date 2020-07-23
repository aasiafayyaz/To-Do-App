
var list = document.getElementById("list")

function addToDo() {

    var todo_item = document.getElementById("to-do-item");
    if (todo_item.value != "") {
        //create li tag
        var li = document.createElement('li');
        var textInput = document.createElement("input");
        // var liText = document.createTextNode(todo_item.value);
        textInput.setAttribute("type", "text");
        textInput.setAttribute("class", "field");
        textInput.setAttribute("Disabled", "true");
        textInput.setAttribute("value", todo_item.value);
        li.appendChild(textInput);

        // create delete button
        var delBtn = document.createElement("button");
        var delText = document.createTextNode("Remove");
        delBtn.appendChild(delText);
        delBtn.setAttribute("class", "btn3");
        delBtn.setAttribute("onclick", 'deleteItem(this)');
        li.appendChild(delBtn);


        //create edit button
        var editBtn = document.createElement("button");
        var editText = document.createTextNode("Edit");
        editBtn.appendChild(editText);
        editBtn.setAttribute("class", "btn4");
        editBtn.setAttribute("onclick", 'editItem(this)');
        li.appendChild(editBtn);

        list.appendChild(li);
        todo_item.value = ""
    }

}

function deleteItem(e) {
    e.parentNode.remove();
}

function delAll() {
    list.innerHTML = ""
}

function editItem(e) {
    e.parentNode.firstChild.disabled = false;
    var saveBtn = document.createElement("button");
    var saveText = document.createTextNode("Save");
    saveBtn.setAttribute("class", "btn5");
    saveBtn.setAttribute("onclick", 'saveItem(this)');
    saveBtn.appendChild(saveText);
    e.parentNode.appendChild(saveBtn);
    e.parentNode.childNodes[1].disabled = true;
    e.parentNode.childNodes[2].disabled = true;

}

function saveItem(e) {
    e.parentNode.childNodes[1].disabled = false;
    e.parentNode.childNodes[2].disabled = false;
    e.parentNode.firstChild.disabled = true;
    e.parentNode.lastChild.remove();
}
