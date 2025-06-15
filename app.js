let userscore = 0;  //tracking for user scrore
let compscore = 0;  //tracking for computer scrore

const choices = document.querySelectorAll(".choice");//create a selector for all choices
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#User-score");
const Compscorepara=document.querySelector("#Comp-score");


const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"]; //a array of string for choose the options by computer
    const randIdx = Math.floor(Math.random() * 3); // create a idx no for the array
    /* floor:A special method Math class for remove the decimal value genrate randomly 
    by random funtion
    random funtion: its a method to genrate a random value when we call this method*/
    return options[randIdx];
}


const drawgame = () => {  // when a game will draw
    console.log("Game Was Draw")
    msg.innerText="Game Was Draw Play Agian.";
    msg.style.backgroundColor=" #081b31";//color dorw game


}


const showWinner=(userWin,userchoice,compchoice)=>{  // show the Winner
    if(userWin){
       userscore++;
       userscorepara.innerText=userscore;

        msg.innerText=`You Win! Your${userchoice} beats ${compchoice}`;// show the msg in MSG container
        msg.style.backgroundColor="#008000";
    }
    else{
        compscore++;
        Compscorepara.innerText=compscore;
        msg.innerText=`You lose ${compchoice} beats your ${userchoice}`;//
        msg.style.backgroundColor="#6a040f"; //give the color wining and losing
    }
}



const playGame = (userchoice) => {
    // choose by user
    console.log("user choice =", userchoice);

    //Generate the choice of computer
    const compchoice = genCompChoice();     //call comp genrate method
    console.log("computer choice =", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    }
    else {
        let userWin = true;
        if (userchoice === "Rock") {// when scissors and paper
            userWin = compchoice === "Paper" ? false : true;

        } else if (userchoice === "Paper") {//when rock and scissors
            userWin = compchoice === "Scissors" ? false : true;

        } else {//when rock and paper
            userWin = compchoice === "Rock" ? false : true;

        }
        showWinner(userWin,userchoice,compchoice);
    }
}


    choices.forEach((choice) => {
        // console.log(choice)//
        choice.addEventListener("click", () => {
            const Userchoice = choice.getAttribute("id")  // get the clicking id and print it 
            console.log("Choice was Clicked", Userchoice)
            playGame(Userchoice)
        })
    })