let tasks = [];

function idGenerator() {
    let timestamp = new Date();

    let id =
            timestamp.getHours().toString() +
            timestamp.getMinutes().toString() +
            timestamp.getSeconds().toString() +
            timestamp.getMilliseconds().toString();

    return id;
}

function createTask() {
    let taskdesc = document.getElementById("newTask").value;

    let task = {
        id: idGenerator(),
        data: {
            desc: taskdesc
        }
    }

    //tasks.push(task);

    //updateScreen();

    addTask(task);
}

function updateScreen() {
    let list = "<ul>";

    tasks.forEach(task => {
        list += "<li>" + task.data.desc + "</li>"
    });

    list += "</ul>";

    document.getElementById("list").innerHTML = list;
    document.getElementById("newTask").value = "";
}

dataWasUpdated( function(snapshot){
    tasks = [];

    snapshot.forEach((doc) =>{
        tasks.push(doc.data());
    })

    updateScreen();
})