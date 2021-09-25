//Your Age in Days
function ageInDays()
{
    var BirthYear=prompt('what is your birth year...Good friend');
    var ageAsDays=(BirthYear=(2018-BirthYear))*365;
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('you are  '   +ageAsDays+   ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
    
}
function reset()
{
    document.getElementById('ageInDays').remove();
}


//challenge 2: generate flower
function flowerGen()
{
    var image=document.createElement('img');
    var div=document.getElementById('flex-gen-flower');
    image.src="D:/niji/flower.jpg";
    div.appendChild(image);
}

//challenge 3: Rock.paper,scissor

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice=yourChoice.id;
    
    botChoice= numberToChoice(randTorpsint());
    console.log('computer choice:',botChoice);
   
    result=decideWinner(humanChoice,botChoice);
    console.log(result);
    
    message=finalMessage(result); //{'message':'you won' ,'color':'green'};
    console.log(message);
    rpsfrontEnd=(yourChoice.id, botChoice, message);
}

function randTorpsint()
{
    return Math.floor(Math.random()*3);
}

function numberToChoice(number)
{
    return ['rock','paper','scissors'] [number];
}

function decideWinner(yourChoice,computerChoice)
{var rpsDatabse={
    'rock':{'scissors'  :1,'paper' :0,'rock':0.5},
    'paper':   {'rock': 1,' paper': 0.5,'scissors': 0},
    'scissors': {'rock': 0, 'paper': 1,'scissors' : 0.5},
};

var yourscore=rpsDatabse[yourChoice][computerChoice];
var computerscore=rpsDatabse[computerChoice][yourChoice];
return[yourscore,computerscore];
}

function finalMessage([yourscore, computerscore]){
if(yourscore==0){
   return {'message': 'you lost', 'color':'red'};
}
   else if (yourscore==0.5){
   return {'message':'you tied','color':'blue'};
   }
    else {
    return{'message':'you won', 'color':'green'};

}}

function rpsfrontend(haumanImageChoice,batImageChoice, finalMessage)
{
   varImageDatabse = {
       'rock' : document.getElementById['rock'].src,
       'paper' : document.getElementById['paper'].src,
       'scissors': document.getElementById['scissors'].src
   } 

   //let's remove all the images
   document.getElementById('rock');
   document.getElementById('paper');
   document.getElementById('scissors')
}

var humanDiv=document.createElement('div');
var botDiv=document.createElement('div');
var message=document.createElement('div');

humanDiv.innerHTML="<img='" + ImageData[humanChoice] + "height=150 width==150"
document.getElementById('flex-box-container-rps').appendChild(humanDiv);