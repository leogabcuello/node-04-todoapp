const { white } = require('colors');
const { inquirerMenu, inquirerInput } = require('./helpers/inquirer');
const TaskRepository = require ('./repositories/TaskRepository'); 

const main = async() =>{

    const taskRepository = new TaskRepository();
    let option = '';
    do {
        option = await inquirerMenu();

        switch(option){

            case 1: 
                    console.log('el usuario eligio crear tarea');
                    const title = await inquirerInput('Task Title : ');
                    console.log(title);
                    taskRepository.createTask(title);
                    break;
            case 2:
                    const allTask = taskRepository.getAllTask();
                    console.log(allTask);
                    break;
    
        }
    

    } while (option !== 0); 

}

main();