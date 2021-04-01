function addingList() {



    var taskInput = document.getElementById("taskInput");

    
    var taskInputValue = taskInput.value;

    if (taskInputValue != "") {

        var formElement = document.getElementById("listForm");
        formElement.classList.add("formAdd");

        
        var task = document.createElement("input");
        task.classList.add("taskInputCreated");
        task.value = taskInputValue;
        task.disabled = true;
        formElement.appendChild(task);

        
        var buttonDoing = document.createElement("button");
        buttonDoing.innerHTML = '<i class="fa fa-thumb-tack"></i>';
        buttonDoing.type = "button";
        buttonDoing.addEventListener("click", function () {
            addingDoingPart(taskInputValue);
            formElement.removeChild(task);
            formElement.removeChild(buttonDoing);
            formElement.removeChild(buttonRemove);

        })
        buttonDoing.classList.add("iconPlus")

        
        var buttonRemove = document.createElement("button");
        buttonRemove.innerHTML = '<i class="fa fa-times"></i>';
        buttonRemove.type = "button";

        buttonRemove.addEventListener("click", function () {

            formElement.removeChild(task);
            formElement.removeChild(buttonDoing);
            formElement.removeChild(buttonRemove);
        })
        buttonRemove.classList.add("iconPlus");

        formElement.appendChild(buttonDoing);
        formElement.appendChild(buttonRemove);

        taskInput.value = "";
    }
    else {
        window.alert("The task cannot be left blank");
    }

}

function addingDoingPart(taskValue) {
    var doingForm = document.getElementById("doingForm");
    doingForm.classList.add("formAdd");
    let task = document.createElement("input");
    task.classList.add("taskInputCreated");
    task.value = taskValue;
    task.disabled = true;

    doingForm.appendChild(task);

    let buttonDone = document.createElement("button");
    buttonDone.innerHTML = '<i class="fa fa-check-square-o"></i>'
    buttonDone.type = "button";
    buttonDone.addEventListener("click", function () {
        addingDonePart(taskValue);

        doingForm.removeChild(task);
        doingForm.removeChild(buttonDone);
        doingForm.removeChild(buttonRemove);

    })

    buttonDone.classList.add("iconPlus");

    let buttonRemove = document.createElement("button");
    buttonRemove.innerHTML = '<i class="fa fa-times"></i>';
    buttonRemove.type = "button";
    buttonRemove.addEventListener("click", function () {
        doingForm.removeChild(task);
        doingForm.removeChild(buttonDone);
        doingForm.removeChild(buttonRemove);
    })

    buttonRemove.classList.add("iconPlus");

    doingForm.appendChild(buttonDone);
    doingForm.appendChild(buttonRemove);
}

function addingDonePart(taskValue) {
    var doneTask = document.createElement("input");
    doneTask.value = taskValue;
    doneTask.disabled = true;
    doneTask.classList.add("taskInputCreated");
    let doneForm = document.getElementById("doneForm");
    doneForm.classList.add("formAdd");

    doneForm.appendChild(doneTask);

    let removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fa fa-times"></i>';
    removeButton.type = "button";
    removeButton.classList.add("iconPlus");
    removeButton.addEventListener("click", function () {
        doneForm.removeChild(doneTask);
        doneForm.removeChild(removeButton);
    })

    doneForm.appendChild(removeButton);

}