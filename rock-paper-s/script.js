let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoer-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(letter)
{
  if(letter === "r") return "Rock";
  if(letter === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice)
{
  console.log("Winner");
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML=convert(userChoice) + "user".fontsize(4).sub() + " beats " + convert(computerChoice) + "comp".fontsize(4).sub() + ". You win! ";
  document.getElementById(userChoice).classList.add('green-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow')},300);
}

function lose(userChoice, computerChoice) {
  console.log("Lose");
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML=convert(userChoice) + "user".fontsize(4).sub() + " loses to " + convert(computerChoice) + "comp".fontsize(4).sub() + ". You lose! ";
  document.getElementById(userChoice).classList.add('red-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow')},300);
}

function draw(userChoice, computerChoice) {
  console.log("Draw");
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML=convert(userChoice) + "user".fontsize(4).sub() + " Equals " + convert(computerChoice) + "comp".fontsize(4).sub() + ". It's a draw!";
  document.getElementById(userChoice).classList.add('gray-glow');
  setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow')},300);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
        lose(userChoice, computerChoice);
        break;
    case "rr":
    case "pp":
    case "ss":
        draw(userChoice, computerChoice);
        break;
  }
}

function main() {
  rock_div.addEventListener('click',function(){
   console.log("Hey you clicked on rock");
  game("r");
  })

  paper_div.addEventListener('click',function(){
   console.log("Hey you clicked on Paper");
  game("p");
  })

  scissors_div.addEventListener('click',function(){
   console.log("Hey you clicked on scissors");
  game("s");
  })
}

main();
