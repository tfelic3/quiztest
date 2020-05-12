// Created score div and container


let introduction = document.querySelector('#introduction');
// Selecting intro div button. Will hide later using event listener. 
let pageIntro = document.querySelector('#introductory-page');
//Selecting intro div page. Will delete this later


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
++scoreValue;
scoreContainer.textContent = scoreValue;
/*
if(scoreValue===3){
 score.style.height= "100vh"; 
 score.style.width = "100vh";
 score.style.opacity = ".5";
 score.style.display ="block";
 score.border.borderRadius = "none";

}
*/
}

let currentIndex = 0;
let select;
let questionButtons


//Objects quiz questions
const questionOne = {
question: "Democratic presidential candidate and former Vice President Joe Biden said he believed this state’s primary “could be done” despite coronavirus fears.",
imgPath: 'images/joebiden.png',            
questionKeys:[{keyOne:"Louisiana"},{keyTwo: "Mississippi"},{keyThree: "Delaware"}, {correctChoice: "Wisconsin"}],
correctChoice: "Wisconsin",
audioSelection: new Audio('images/bidenaudio.m4a')
}

const questionTwo ={
 question: "Gov. Brian Kemp ordered this state to begin a phased reopening on April 23.",
 imgPath: 'images/kemp.png',
 questionKeys: [{keyOne:"Georgia"},{keyTwo:"Arkansas"},{keyThree:"New York"},{keyFour:"Mississippi"}],
 correctChoice: "Georgia",
 audioSelection: new Audio('images/kempaudio.m4a')
}

const questionThree ={
question: "The novel coronavirus appears to have originated in this animal?",
imgPath: 'images/coronavirusedit.png',
questionKeys:[{keyOne: "Mouse"},{keyTwo:"Donkey"},{keyThree:"Bat"},{keyFour:"Cow"}],
correctChoice: "Bat",
audioSelection: new Audio('images/kempaudio.m4a')
}

const questionFour ={
    question: 'This public official began a "modified quarantine" after coming into contact with a White House staffer who tested positive for the coronavirus.',
    imgPath: 'images/test.png',
    imgPath2: "images/anthonyfauci.png",
    questionKeys:[{keyOne: "Stephen Miller"},{keyTwo:"Anthony Fauci"},{keyThree:"Donald Trump"},{keyFour:"Mike Pence"}],
    correctChoice: "Anthony Fauci" 
}

const questionFive ={
    question: 'Kevin Hassett said working in the West Wing may be risky during to coronavirus pandemic. What position does he hold?',
    imgPath: "images/kevinhassett.png",
    questionKeys:[{keyOne: "Secretary of Defense"},{keyTwo:"Secretary of Labor"},{keyThree:"Senior Economic Advisor"},{keyFour:"Vice President"}],
    correctChoice: "Senior Economic Advisor" 
}


//Function for selecting questions in object
let questionSelection = () =>{
    

let questionChoices = [questionOne, questionTwo, questionThree, questionFour, questionFive];

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

let counter = 0;
let functionCounter = ()=>{
    counter++;
    if(counter === 5 && scoreValue ===1){
        console.log("Want to try again?")
        } else if (counter ===5 && scoreValue ===2){
        console.log("Try again")
    } else if(counter ===5 && scoreValue ===3){
        console.log("You did a bit better")
    } else if (counter ===5 && scoreValue===4){
        console.log("You did great")
    } else if (counter ===5 && scoreValue ===5){
        console.log("Outstanding performance");
    }
}

questionTwo.audioSelection.play()


buttonContainer.forEach(div=>{
   div.addEventListener('click', function(e){
    if (e.target.id ==="answerChoices"){
        e.target.style.backgroundColor ="green";  
        if(e.target.textContent==="Anthony Fauci"){
            console.log(questionFour.imgPath2);
            let imageChange= div.previousElementSibling.previousElementSibling; 
            imageChange.src=questionFour.imgPath2; 
        }
        if(e.target.textContent==="Georgia"){
            questionTwo.audioSelection.play()
        } else{
            questionTwo.audioSelection.pause()
        }
        console.log(window.length);
        scoreHandle ();
        functionCounter();
        e.target.disabled ="true";
        let correctDiv = document.createElement('p');
        correctDiv.style.color = "green";
        correctDiv.style.textAlign ="center";
        correctDiv.style.fontSize = "1.5em"
        correctDiv.textContent = ("You got it right!");
        div.insertAdjacentElement("beforebegin",correctDiv);
        let otherChoices = div.childNodes;
        otherChoices.forEach(choice=>{choice.disabled = "true";})
        
        
        
    } else{
        questionTwo.audioSelection.pause()
        let content = div.childNodes;
        for(let j=0;j<content.length;j++){
            if(content[j].textContent==="Anthony Fauci"){
                let imageChange= div.previousElementSibling.previousElementSibling; 
                imageChange.src=questionFour.imgPath2;  
            };
        }

        functionCounter();
        otherChoices = div.childNodes;
       for(let i=0; i<otherChoices.length;i++){
           if(otherChoices[i].id ==="answerChoices"){
               let correctChoice =otherChoices[i].textContent;
               let wrongDiv = document.createElement('p');
               wrongDiv.style.color = "green";
               wrongDiv.style.textAlign ="center";
               wrongDiv.style.fontSize = "1.5em";
               wrongDiv.textContent = "The correct answer is " + correctChoice+".";
           div.insertAdjacentElement("beforebegin",wrongDiv);
            }
           
        }
            
      
        
        
        for(let i=0;i<otherChoices.length;i++){
            
        if (otherChoices[i].id !=="answerChoices"){
            otherChoices[i].style.backgroundColor ="red";
            otherChoices[i].style.opacity = ".2";
            otherChoices[i].disabled = true;
            } else if(otherChoices[i].id ==="answerChoices"){
                otherChoices[i].style.backgroundColor = "green";
                otherChoices[i].disabled = true;
            }    
        }
    }
      
    
   })
      
      
})
  






