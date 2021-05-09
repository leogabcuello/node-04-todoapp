const { white } = require('colors');
const { inquirerMenu, inquirerInput } = require('./helpers/inquirer');
const { getAllTask, createTask } = require('./services/fileservice');
// const TaskRepository = require ('./repositories/TaskRepository'); 

const main = async() =>{

    let option = '';

    do {
        option = await inquirerMenu();

        switch(option){

            case 1: 
                    console.log('el usuario eligio crear tarea');
                    const title = await inquirerInput('Task Title : ');
                    console.log(title);
                    createTask(title);
                    break;
            case 2:
                    const allTask = getAllTask();
                    console.log(allTask);
                    break;
    
        }
    

    } while (option !== 0); 

}

main();