// Created score div and container


let introduction = document.querySelector('#introduction');
// Selecting intro div button. Will hide later using event listener. 
let pageIntro = document.querySelector('#introductory-page');
//Selecting intro div page. Will delete this later

let score = document.querySelector('#score-container');

let scoreTag = document.querySelector('.score-tag')
score.style.visibility = "hidden";
//This creates container for score elements. This will begin as hidden.

let scoreValue = document.createElement('p');
scoreValue.classList.add('score');
scoreTag.insertAdjacentElement('beforeend', scoreValue);

let currentIndex = 0;
let select;

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

currentIndex = questionChoices.indexOf(select);
nextQuestion = ++currentIndex;
nextIndex = questionChoices[nextQuestion];

console.log(select)
console.log(questionChoices[nextQuestion]);
console.log(questionChoices)


let cardOne = document.querySelector('#cardOne');
let cardImg = document.querySelector('#image');
let cardQuestion = document.querySelector('#main-question');
let button = document.querySelector('#answerChoice');
//Creates image from each object
let myImage = document.createElement('img');
myImage.id=('image');
myImage.src = select.imgPath;

//Create question from each object selection
let createQuestion = document.createElement('h3')
createQuestion.id= 'question1';
createQuestion.textContent = select.question;

cardOne.appendChild(myImage);
cardOne.appendChild(createQuestion);

//Creates button for each question. I want buttons to appear randomly.



let newButtons;
let questionButtons;

let createButtons = () =>{
    for (let i=0; i<select.questionKeys.length; i++){
newButtons = document.createElement('button');
newButtons.id = "questionButtons";
newButtons.textContent = Object.values(select.questionKeys[i]);
cardOne.insertAdjacentElement('afterend',newButtons)
    }
    questionButtons = document.querySelectorAll("#questionButtons");
   

}

createButtons();

console.log(questionButtons)




    questionButtons.forEach(function(button){
        let buttonHandler = (e) =>{
           
            
            if(e.target.textContent === select.correctChoice){
             button.style.backgroundColor = "green";
             button.removeAttribute('id');
             score.style.visibility = "visible";
             scoreValue.textContent = 1;
             forwardButton();
             let buttonValue = document.querySelectorAll("#questionButtons");
             for(let i=0;i<buttonValue.length;i++){
                 buttonValue[i].style.backgroundColor = "red";
             }

            } else{
                button.style.backgroundColor ="red";
                console.log(questionButtons);
                forwardButton();
                for(let i =0;i<questionButtons.length;i++){
                if(questionButtons[i].textContent ===select.correctChoice){
                    questionButtons[i].style.backgroundColor = "green";
                } else{
                    questionButtons[i].style.backgroundColor ="red";
                    
                }
                  
              }
                

            }
             
            
            
        }
    button.addEventListener('click',buttonHandler);    

     let forwardButton = () =>{
        let continueButton = document.createElement('button');
        continueButton.style.backgroundColor ="purple";
            continueButton.textContent = "Continue"; 
            document.body.insertAdjacentElement('afterend', continueButton);

          let forwardButtonHandle = ()=>{
           for(let i =0;i<questionButtons.length;i++){
               questionButtons[i].remove();
           }
            select = nextIndex;
            myImage.src = select.imgPath;
            createQuestion.textContent = select.question;
            createButtons();
            console.log(questionButtons)
            button.addEventListener('click',buttonHandler)
            
                         
          } 
           
        continueButton.addEventListener('click',forwardButtonHandle)
        

    }
    }); 


    let answer=document.createElement("p");
    answer.textContent = "Wrong! The correct choice is " + select.correctChoice;
    answer.style.color = "red";
    cardOne.insertAdjacentElement('afterend', answer);
    answer.style.display = "none";
    

   
        
    
    
    
    }




questionSelection();

