const readlinesync=require("readline-sync");
const chalk = require('chalk');


console.log("How well do you know me?");
console.log("CLI App by Manpreet Singh");
console.log("\n");

var username=readlinesync.question("What is your name?");
console.log(chalk.blue("Welcome "+username+" !"));

var yourscore=0;
function playGame(question,answer){
var userAns=readlinesync.question(question);
if(userAns.toUpperCase()===answer.toUpperCase()){
  console.log(chalk.greenBright("Yayy, you're awesome!"));
  yourscore++;
}
else
{
  console.log(chalk.redBright("No, its wrong ....."));
}
console.log("-------------------------------------");
}

var questions=[{
  question:"Do I like to play badminaton.YES or NO?",
  answer:"YES"
},
{
  question:"Am I older than 20. YES or NO?",
  answer:"Yes"
},
{
  question:"Do I like to play chess. YES or NO?",
  answer:"Yes"
},
{
  question:"Do I like to read or watch?",
  answer:"watch"
},
{
  question:"DO I like coffee or tea?",
  answer:"coffee"
}
];

for(var i=0;i<questions.length;i++){
  playGame(questions[i].question,questions[i].answer);
}

console.log("You scored: " +yourscore);

if(yourscore===0){
  console.log(chalk.redBright("Sorry, too bad you don't know. :/"));
}
var scores = [
  {
    user:"Manpreet",
    score:5
  }
]
var count=scores.length;
for(var i=0;i<scores.length;i++)
{
  if(yourscore>=scores[i].score){
    count--;
  }
}
if(count===0){
  console.log(chalk.bold.yellowBright("You beat the high score!"));
}