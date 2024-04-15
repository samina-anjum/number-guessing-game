//# ! usr/bin/env node

import chalk from "chalk";
import { log } from "console";

import inquirer from "inquirer";

let roundNumber: number = Math.floor((Math.random() * 4) + 1);

let userinput= await inquirer.prompt({
    "type":"number",
    "name":"guessdnumber",
    "message":"Guess a number between 1 and 4"
 })

 if( userinput.guessdnumber === roundNumber){
 console.log(`congratultion! you guest correctly`);
 } else{ 
    console.log(`sorry try next time.correct ans is: ${roundNumber} `);
    
 }