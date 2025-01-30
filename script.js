const add = document.getElementById("add")
add.addEventListener("click", () => {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    if(title.length == 0 || description.length == 0) return window.alert("Title or description mustn't be empty!")
    const tasks = document.getElementsByClassName("tasks")[0]
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task")
    taskDiv.innerHTML = `
        <div class="content">
            <div class="checkbox-wrapper-13 ">
                <input id="c1-13" type="checkbox">
            </div>
            <div>
                <h3 class="title">${title}</h3>
                <span class="description">${description}</span>
            </div>
        </div>
        <div class="icons">
            <i class="fa-solid fa-trash"></i>
        </div>
    `;
    tasks.appendChild(taskDiv)
    document.getElementById("title").value = "";
    document.getElementById("description").value = ""

    const remove = taskDiv.querySelector(".fa-trash")
    remove.addEventListener("click", () => {
        taskDiv.remove();
    })
})