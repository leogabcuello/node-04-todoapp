const TaskRepository = require ('../repositories/TaskRepository'); 

const taskrepository = new TaskRepository();

const getAllTask = () => {
    const tasks = taskrepository.getAllTask();
    return tasks.map(e => {
        return {titlie : e.title, done: e.done}
    });
}

const createTask = (title) => {
    taskrepository.createTask(title);
}

module.exports = {
    getAllTask,
    createTask
}