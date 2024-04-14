#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 10000;
let myPin = 1122 ;

let pinanswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);


if(pinanswer.pin === myPin) {
    console.log("correct pin!!");}

  let operationans = await inquirer.prompt([
    {
        name: "operation",
        message: "select option",
        type: "list",
        choices: ["withdraw", "check balance" , "fast cash"]
    }
  ]);
  console.log(operationans);
  
 if(operationans.operation === "withdraw") {
    let amountans =await inquirer.prompt([
        {
            name: "amount",
            message: "enter your amount",
            type: "number"
        }, 
    ]);

  
    
    if(amountans.amount <= 10000){
        myBalance -= amountans.amount;
        console.log("your remaining balance is:" + myBalance)
    }else console.log("insufficiant balance");
    

 }else if (operationans.operation === "check balance"){
   console.log("your balance is :" + myBalance)
 }else if(operationans.operation === "fast cash") {
     let cashwithdraw =await inquirer.prompt([
           {
               name: "amount",
               message: "select amount",
               type: "list",
              choices: [1000, 2000, 5000, 10000]
           },  ]); 
           if(operationans.operation === "fast cash"){
            myBalance -= cashwithdraw.amount;
            console.log("your remaining balance is:" + myBalance)
           }else console.log("insufficiant balance");

      
     
      
       
    
 }
 
 else {
    console.log("incorrect pin number");
 }

