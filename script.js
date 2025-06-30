let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const userscore = document.querySelector("#user-score");
const compscore = document.querySelector("#comp-score");
const resultMsg = document.querySelector("#msg");
const user = document.getElementById("user");
const comp = document.getElementById("comp");

const result = (userChoice) =>{
    const options = ["rock" , "paper" , "scissor"];
    const randidx = Math.floor(Math.random() * 3);
    const compChoice = options[randidx];

    user.innerHTML = `<img src="${userChoice}.png" alt="${userChoice}">` ;
    comp.innerHTML = `<img src="${compChoice}.png" alt="${compChoice}">` ;
    const winner = getWinner(userChoice, compChoice);
    if (winner === "draw") {
        resultMsg.textContent = "Draw";
    }
    else {
        if(winner === "computer"){
            compScore ++;
            compscore.textContent = compScore;
        } else {
            userScore ++;
            userscore.textContent = userScore;
        }
        resultMsg.textContent = `Winner is ${winner}`;
    }
}

choices.forEach((choice) =>{
    choice.addEventListener("click" , () =>{
         const userChoice =choice.getAttribute("id");
         result(userChoice);
    })
});

const getWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) return "draw";

    if (userChoice === "rock"){
        if(compChoice === "paper"){
           return "computer"; 
        }   
        else {
            return "user";
        }
    } else if (userChoice === "paper"){
        if(compChoice === "scissor"){
            return "computer";
        }    
        else {
            return "user";
        }
    } else if (userChoice === "scissor"){
        if(compChoice === "rock"){
            return "computer";
        }
        else {
            return "user";
        }
    }
};