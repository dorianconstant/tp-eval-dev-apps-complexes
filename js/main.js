let list = new TaskList();
let tasks = new CompoTaskList({
    element: document.getElementById('tasks'),
    taskList: list
});

let task1 = new Task('tache 1', null);
let task2 = new Task('tache 2', null);
let task3 = new Task('tache 2', null);

list.add(task1);
list.add(task2);
list.add(task3);

tasks.render();