const readlinesync=require("readline-sync");
// const chalk = require('chalk');

console.log("How well do you know me?");
console.log("CLI App by Manpreet Singh");
console.log("\n");

var username=readlinesync.question("What is your name?");
console.log("Welcome "+username+" !");

var yourscore=0;
function playGame(question,answer){
var userAns=readlinesync.question(question);
if(userAns.toUpperCase()===answer.toUpperCase()){
  yourscore++;
}
else
{
  console.log("No, its wrong .....");
}
}

var questions=[{
  question:"DO I like apple, mango or both?",
  answer:"both"
},
{
  question:"Am I older than 20 ?",
  answer:"Yes"
},
{
  question:"Do I like to play chess?",
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

if(yourscore>=4){
     console.log("You did it!");
    console.log("You beat the high score!");
}
else if(yourscore<=0) {
  console.log("Sorry, too bad you don't know. :/");
}