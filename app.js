const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
   
     if(userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb"){
       return userInput;
     }else{
       console.log('Please enter either rock, paper or scissors');
     }
   }
   
   const getComputerChoice = () => {
     randomNumber = Math.floor(Math.random()* 3);
   
     switch(randomNumber){
       case 0:
       return "rock";
       break;
       case 1:
       return "paper";
       break;
       case 2:
       return "scissors";
       break;
       default:
       return "The program has encountered an error"
     };
   }
   
   const determineWinner = (userChoice, computerChoice) => {
     if(userChoice === "bomb"){
       return "You win!"
     }
     if(userChoice === computerChoice){
       return "The game is a tie";
     }
     if(userChoice === "rock"){
       if(computerChoice === "paper"){
         return "The computer has won"
       }else if(computerChoice != "paper"){
         return "The user has won"
       };
     };
   
     if(userChoice === 'paper'){
       if(computerChoice === 'scissors'){
         return "The computer has won";
       }else if(computerChoice === "rock"){
         return "You have won"
       }
     };
   }
   
   const playGame = () => {
     userChoice = getUserChoice('paper');
     computerChoice = getComputerChoice();
     console.log(`You chose: ${userChoice}`);
     console.log(`The computer chose: ${computerChoice}`);
   
     console.log(determineWinner(userChoice, computerChoice));
   }
   
   playGame();
   
   