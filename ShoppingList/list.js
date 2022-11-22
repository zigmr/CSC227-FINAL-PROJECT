let list = [];
        
function addToList(){
    var input = document.getElementById("userInput").value;
    list.push(input);
    //input.value = "";  where should I put this statement to empty the field automatically for the user. 
    display()
}

var addButton = document.getElementById("add");
addButton.addEventListener("click", addToList);

var deleteFirst = document.getElementById("DeleteFirst");
deleteFirst.addEventListener("click", DeleteFirstItem);

function DeleteFirstItem (){
    list.shift();
    display()
}

var deleteLast = document.getElementById("DeleteLAst");
deleteLast.addEventListener("click", DeleteLAstItem);

function DeleteLAstItem(){
    list.pop();
    display()
}

function display(){
    document.getElementById('allItems').innerHTML = list.join('<br>');
}
