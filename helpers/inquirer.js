const inquirer = require('inquirer');
require ('colors');
const Choices = require('inquirer/lib/objects/choices');


const inquirerMenu = async() =>{
    console.log('========================');
    console.log('Select one option'.white);
    console.log('========================');

    const menu = [

        {
            type: 'list',
            name: 'option',
            message: 'What do you want to do?',
            choices: [
                {
                    value: 1,
                    name: `${'1-'.blue} Create Task`
                },
                {
                    value: 2,
                    name: `${'2-'.blue} Get Task`
                },
                {
                    value: 0,
                    name: `${'0-'.blue} Salir`
                }
            ]
        }   
    
    ];

    const { option } = await inquirer.prompt(menu);

    return option
}

const inquirerInput = async(message) => {

    const question = [
        {
            type: 'input',
            name: 'description',
            message,

        }
    ]

    const { description } = await inquirer.prompt(question);

    return description;
}

module.exports = {inquirerMenu , inquirerInput};