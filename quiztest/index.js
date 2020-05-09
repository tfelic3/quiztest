// Created score div and container


let introduction = document.querySelector('#introduction');
// Selecting intro div button. Will hide later using event listener. 
let pageIntro = document.querySelector('#introductory-page');
//Selecting intro div page. Will delete this later

let modal = document.querySelector(".modal");
console.log(modal)
let score = document.querySelector('#score-container');

let scoreTag = document.querySelector('.score-tag')
score.style.visibility = "hidden";
//This creates container for score elements. This will begin as hidden.

let scoreContainer = document.createElement('p');
scoreContainer.classList.add('score');
scoreTag.insertAdjacentElement('beforeend', scoreContainer);
let scoreValue= 0 ;
let scoreHandle = () =>{
score.style.visibility = "visible";
scoreValue++;
scoreContainer.textContent = scoreValue;
if(scoreValue===3){
 score.style.height= "100vh"; 
 score.style.width = "100vh";
 score.style.opacity = ".5";
 score.style.display ="block";
 score.border.borderRadius = "none";

}
}

let currentIndex = 0;
let select;
let questionButtons


//Objects quiz questions
const questionOne = {
question: "Democratic presidential candidate and former Vice President Joe Biden said he believes this state’s primary “could be done” despite coronavirus fears.",
imgPath: 'images/joebiden.png',                 
questionKeys:[{keyOne:"Louisiana"},{keyTwo: "Mississippi"},{keyThree: "Delaware"}, {correctChoice: "Wisconsin"}],
correctChoice: "Wisconsin",
audioSelection: new Audio('images/bidenaudio.m4a')
}

const questionTwo ={
 question: "This governor is reopening the state on Friday April 23.",
 imgPath: 'images/kemp.png',
 questionKeys: [{keyOne:"Gov. Edwards"},{keyTwo:"Gov. Kemp"},{keyThree:"Gov Cuomo"},{keyFour:"Gov. Jindal"}],
 correctChoice: "Gov. Kemp",
 audioSelection: new Audio('images/kempaudio.m4a')
}

const questionThree ={
question: "The novel coronavirus appears to have originated in this animal?",
imgPath: 'images/coronavirusedit.png',
questionKeys:[{keyOne: "Mouse"},{keyTwo:"Donkey"},{keyThree:"Bat"},{keyFour:"Cow"}],
correctChoice: "Bat",
audioSelection: new Audio('images/kempaudio.m4a')
}


//Function for selecting questions in object
let questionSelection = () =>{
    

let questionChoices = [questionOne, questionTwo, questionThree];

function shuffle(){
    let currentPass = questionChoices.length;
    let index,temp;
    while (currentPass>0){
        index= Math.floor(Math.random()*currentPass);
        currentPass--;
        temp = questionChoices[currentPass];
        questionChoices[currentPass]  = questionChoices[index];
        questionChoices[index] = temp;
        select = questionChoices[index];
    }
    
}

shuffle();





questionChoices.forEach(question=>{
    let cardOne = document.createElement('div');
    cardOne.classList.add("cardDiv")
    let cardImg = document.querySelector('.image');
    let cardQuestion = document.querySelector('.main-question');
    //Creates image from each object
    let myImage = document.createElement('img');
    myImage.id=('image');
    myImage.src = question.imgPath;
   let createQuestion = document.createElement('h3')
   createQuestion.id= 'main-question';
   createQuestion.textContent = question.question;
   let buttonDiv = document.createElement('div');
   buttonDiv.classList.add("buttonBox");

   let correctHandle= () =>{
   let correctDiv = document.createElement("p");
   correctDiv.textContent= question.correctChoice;
   correctDiv.style.color ="red";
   createQuestion.insertAdjacentElement("afterend",correctDiv);
   }
   document.body.appendChild(cardOne);
   cardOne.appendChild(myImage);
   cardOne.appendChild(createQuestion);
   createQuestion.insertAdjacentElement("afterend",buttonDiv)

   
   


   question.questionKeys.forEach(key=>{
       questionButtons = document.createElement('button');
       questionButtons.textContent = Object.values(key);
       if(questionButtons.textContent===question.correctChoice){
        questionButtons.id=("answerChoices");   
       }
       buttonDiv.appendChild(questionButtons);
       questionButtons=document.querySelectorAll('button')
   })
     
 
   
     
})

}
questionSelection(); 



let buttonContainer = document.querySelectorAll('.buttonBox')


let buttonHandler = (e)=>{

}


buttonContainer.forEach(div=>{
   div.addEventListener('click', function(e){
    if (e.target.id ==="answerChoices"){
        e.target.style.backgroundColor ="green";
       console.log(e);
        scoreHandle ();
        e.target.disabled ="true";
        let correctDiv = document.createElement('p');
        correctDiv.style.color = "green";
        correctDiv.style.textAlign ="center";
        correctDiv.textContent = ("You got it right!");
        div.insertAdjacentElement("beforebegin",correctDiv);
        let otherChoices = div.childNodes;
        otherChoices.forEach(choice=>{choice.disabled = "true";})
        
    } else{
       
        otherChoices = div.childNodes;
       for(let i=0; i<otherChoices.length;i++){
           if(otherChoices[i].id ==="answerChoices"){
               let correctChoice =otherChoices[i].textContent;
               let wrongDiv = document.createElement('p');
               wrongDiv.style.color = "green";
               wrongDiv.style.textAlign ="center";
               wrongDiv.textContent = "The correct answer is " + correctChoice;
           div.insertAdjacentElement("beforebegin",wrongDiv);
            }
           
        }
            
      
        
        
        for(let i=0;i<otherChoices.length;i++){
            
        if (otherChoices[i].id !=="answerChoices"){
            otherChoices[i].style.backgroundColor ="red";
            otherChoices[i].disabled = true;
            } else if(otherChoices[i].id ==="answerChoices"){
                otherChoices[i].style.backgroundColor = "green";
                otherChoices[i].disabled = true;
            }    
        }
    }
      
    
   })
      
      
})
  




































