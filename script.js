//Your Age in Days
function ageInDays()
{
    var BirthYear=prompt('what is your birth year...Good friend');
    var ageAsDays=(BirthYear=(2020-BirthYear))*365;
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
    image.src="D:static/flower.jpg";
    div.appendChild(image);
}

//challenge 3: Rock.paper,scissor

function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice=yourChoice.id;
    
    botChoice= numberToChoice(randToRpsInt());
    console.log('computer choice:',botChoice);
   
    result=decideWinner(humanChoice,botChoice);
    console.log(result);
    
    message=finalMessage(result); //{'message':'you won' ,'color':'green'};
    console.log(message);

    rpsfrontend=(yourChoice.id, botChoice, message);
}

function randToRpsInt()
{
    return Math.floor(Math.random()*3);
}

function numberToChoice(number)
{
    return ['rock','paper','scissors'] [number];
}

function decideWinner(yourChoice,computerChoice)
{var rpsDatabase={
    'rock':{'scissors'  :1,'paper' :0,'rock':0.5},
    'paper':   {'rock': 1,' paper': 0.5,'scissors': 0},
    'scissors': {'rock': 0, 'paper': 1,'scissors' : 0.5},
};

var yourscore=rpsDatabase[yourChoice][computerChoice];
var computerscore=rpsDatabase[computerChoice][yourChoice];
return[yourscore,computerscore];
}

function finalMessage([yourscore, computerscore ]){
if(yourscore==0){
   return {'message': 'you lost', 'color':'red'};
}
   else if (yourscore==0.5){
   return {'message':'you tied','color':'blue'};
   }
    else {
    return{'message':'you won', 'color':'green'};

}}

function rpsfrontend(humanImageChoice, botImageChoice, finalMessage){
   var imagesDatabase = {
       'rock' : document.getElementById('rock').src,
       'paper' : document.getElementById('paper').src,
       'scissors': document.getElementById('scissors').src
   } 

   //let's remove all the images
   document.getElementById('rock').remove();
   document.getElementById('paper').remove();
   document.getElementById('scissors').remove();


var humanDiv=document.createElement('div');
var botDiv=document.createElement('div');
var message=document.createElement('div');

humanDiv.innerHTML="<img src='" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: 10px 15px rgbal>"
botDiv.innerHTML="<img src='" +imagesDatabase[botImageChoice] +"'>"
document.getElementById("flex-box-rps-div").appendChild(humanDiv);

}


//challenge 4: change the color of all buttons

var all_buttons= document.getElementsByTagName('button');//getting the elements what are button
console.log(all_buttons);
//taking copy of all buttons
var copyAllButtons=[];
for(let i=0;i<all_buttons.length;i++)
{
    copyAllButtons.push(all_buttons[i].classList[1]);
}
    console.log(copyAllButtons);


function buttonChangeColor(buttonThingy)

{
    if (buttonThingy.value=="red"){
        buttonsRed();
    }else if(buttonThingy.value=="green"){
            buttonsGreen();
        }else if(buttonThingy.value=="reset"){
                buttonsColorReset();
        }else if(buttonThingy.value=="random"){
                    randomColors();
                }
            }

        function buttonsRed()
        {
            for(let i=0;i<all_buttons.length;i++)
            {
                all_buttons[i].classList.remove(all_buttons[i].classList[1]);
                all_buttons[i].classList.add('btn-danger');
            }
        }    
        

        function buttonsGreen()
        {
            for(let i=0;i<all_buttons.length;i++)
            {
                all_buttons[i].classList.remove(all_buttons[i].classList[1]);
                all_buttons[i].classList.add('btn-success');
            }
        }    
        

        function buttonsGreen()
        {
            for(let i=0;i<all_buttons.length;i++)
            {
                all_buttons[i].classList.remove(all_buttons[i].classList[1]);
                all_buttons[i].classList.add('btn-success');
            }
        }    


        function  buttonsColorReset()
        {
            for(let i=0;i<all_buttons.length;i++)
            {
                all_buttons[i].classList.remove(all_buttons[i].classList[1]);
                all_buttons[i].classList.add(copyAllButtons[i]);
            }
        }    


        function  randomColors()
        {
            let Choices = ['btn-primary','btn-danger','btn-warning','btn-success']

            for(let i=0;i<all_buttons.length;i++)
            {
                let randomnumber = Math.floor(Math.random()*4);
                all_buttons[i].classList.remove(all_buttons[i].classList[1]);
                all_buttons[i].classList.add(Choices[randomnumber]);
            }
        }
        
        

        