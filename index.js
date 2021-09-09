var readlinesync = require("readline-sync");
var score = 0;
var userName= readlinesync.question("May i know your name ?  ");
console.log("welcome " + userName.toUpperCase()  +" to DO YOU KNOW ME ?");
console.log("Let's begin the game !");
console.log("-----------------------");
function play(question,answer)
{
  var userAnswer=readlinesync.question(question);
  if(userAnswer.toUpperCase() ===answer)
  {
    console.log("right answer !!!" );
    score++;
    
  }
  else
  {
    console.log("wrong answer");
     console.log("Correct answer is :" , answer);
    
  }
console.log("current score is :" ,score);
console.log("-----------------------")
}
var question=[
  {
    question: "Where do i live ?  ",
    answer: "UDHAMPUR"
  },
  {
    question: "Where do i study now ?  ",
    answer: "UDHAMPUR"
  },
  {
    question: "When i completed my bachelor's ?  ",
    answer: "2020"
  },
  {
    question: "What is name of my high school?  ",
    answer: "NATIONAL ACADEMY"
  },
  {
    question: "When i completed my 10th?  ",
    answer: "2014"
  }
]
for (var i=0; i<question.length ;i++)
{
  var currentQues= question[i];
  play(currentQues.question,currentQues.answer)
}
console.log("YAY! your final score is  : " , score)
console.log("congratulations!! "+userName )