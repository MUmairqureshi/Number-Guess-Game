import inquirer from "inquirer";

type usernumType = {
    userGuess: number
    systemNum : number
}
async function startgame( ) {
    const systemNum : number = Math.floor(Math.random() * 10);

    const useNumber:usernumType  = await inquirer.prompt([
        {
            type :"number",
            name : "userGuess",
           message :  "Enter Your Number b/w 1 -10: "

        }
    ])

    const {userGuess} = useNumber;

    console.log( "your Guess: " , userGuess , "\n System Guess" , systemNum)
    if( userGuess === systemNum){
        console.log("Your Guess is correct \n Yor Won" )
    }
    else{
        console.log("Better luck next time ")
    }
}


 
async function tryAgain( ) {
 do{ 
    await startgame()
    var again = await inquirer.prompt(
        {
            type : "input",
            name : "restart",
            message : " Do you want to Continue press Y or n"

        }
    )}
     while( again.restart === "Y" || again.restart === "y" || again.restart === "YES" )
}
tryAgain()