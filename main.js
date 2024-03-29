import inquirer from "inquirer";
let mybalance = 10000; //dollar
mybalance -= 6000;
let mypin = 4587;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "enter your pin",
    type: "number"
});
//      45879===  4587-false
if (pinAnswer.pin === mypin) {
    console.log("correct pin code!!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }
    ]);
    console.log(operationAnswer);
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "number"
            }
        ]);
        // ==, -=; +=
        mybalance -= amountAnswer.amount;
        console.log("your remaining balance is" + mybalance);
    }
    else if (operationAnswer.operation === "check balance") {
        console.log("your balance is: " + mybalance);
    }
}
else {
    console.log("Incorrect pin number");
}
