#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000; // Dollar
let myPin = 1234;
const pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "enter your pin",
        type: "number",
    }
]);
// 1234 === 1234 - false
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance", "fast cash"],
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        const amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: " enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("you don't have enough money in your account to cover youe transaction.");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`your remaining balance is:  ${myBalance}`);
        }
        ;
    }
    else if (operationAns.operation === "fast cash") {
        const enterAmount = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "select your amount",
                choices: ["1000", "3000", "7000", "10000"]
            }
        ]);
        if (enterAmount.amount <= myBalance) {
            let balance2 = myBalance - enterAmount.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
}
else {
    console.log("Incorrect pin number");
}
