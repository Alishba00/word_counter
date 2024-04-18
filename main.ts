#! /usr/bin/env node 


//firstly import inquirer module.
import inquirer from "inquirer";
import chalk from "chalk";
//declare  a constant 'answer'.

const answers:{ sentences: string}= await inquirer.prompt({
    name:"sentences",
    type :"input",
    message:chalk.yellow.bold("Enter your sentence?")

})
//trim() method  whitespace or dot ko remove kr deta h
let words = answers.sentences.trim().split(" ");
console.log((words))
console.log(chalk.magentaBright.bold.underline(`YOUR SENTENCES CONSISTS ${words.length} WORD.`)); 