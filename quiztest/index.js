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

//Objects quiz questions
const questionOne = {
question: "Democratic presidential candidate and former Vice President Joe Biden said he believes this state’s primary “could be done” despite coronavirus fears.",
imgPath: 'images/joebiden.png',                 
questionKeys:[{keyOne:"Louisiana"},{keyTwo: "Mississippi"},{keyThree: "Delaware"}, {correctChoice: "Wisconsin"}],
correctChoice: "Wisconsin",
audioSelection: new Audio('images/bidenaudio.m4a')
}

const questionTwo ={
 question: "This governor is reopening the state on Friday Arpil 23.",
 imgPath: 'images/kemp.png',
 questionKeys: [{keyOne:"Gov. Edwards"},{keyTwo:"Gov. Kemp"},{keyThree:"Gov Cuomo"}],
 correctChoice: "Gov. Kemp",
 audioSelection: new Audio('images/kempaudio.m4a')
}

const questionThree ={
question: "The novel coronavirus appears to have originated in this animal?",
imgPath: 'images/coronavirusedit.png',
questionKeys:[{keyOne: "mouse"},{keyTwo:"donkey"},{keyFour:"bat"}],
correctChoice: "bat"
}

//Function for selecting questions in object
let questionSelection = () =>{
    
let select;
let questionChoices = [questionOne, questionTwo, questionThree];

let selection =  Math.floor(Math.random()*questionChoices.length);  

select = questionChoices[selection];
console.log(select.imgPath);

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
let questionButtons = () =>{
    select.questionKeys.forEach(question=>{
        let newButtons = document.createElement('button');
        newButtons.textContent = Object.values(question); 
        cardOne.insertAdjacentElement('afterend', newButtons);
    });
    
    }
    questionButtons();
    


    let introFunction = ()=>{
        window.scrollTo({
          top: 4000,
          behavior: 'smooth'
        });
      }
introFunction();
    

    introduction.style.visibility = "hidden";
    score.style.visibility="visible";
    pageIntro.remove();

    let buttonHandle = document.querySelectorAll('button');


    buttonHandle.forEach(function(buttons){
        function buttonInfo(e){
            if(e.target.textContent ===select.correctChoice){
                buttons.style.backgroundColor ="green";   
                scoreValue.textContent = +1;  
                select.audioSelection.play();  

            } else {
                buttons.style.backgroundColor = "red";
                let answer=document.createElement("p");
                answer.textContent = "Wrong! The correct choice is " + select.correctChoice;
                answer.style.color = "red";
                cardOne.insertAdjacentElement('afterend', answer);
            }
        };
        buttons.addEventListener('click', buttonInfo);
    })
};


introduction.addEventListener('click',questionSelection);




/*

let cardOne = document.querySelector('#cardOne');
let cardImg = document.querySelector('#image');
let cardQuestion = document.querySelector('#main-question');
let button = document.querySelector('#answerChoice');

let myImage = document.createElement('img');
myImage.id=('image');
myImage.src = questionOne.imgPath;
myImage.alt ="Joe Biden";

let createQuestion = document.createElement('h3')
createQuestion.id= 'question1';
createQuestion.textContent = questionOne.question;


let correctButton1 = document.createElement('button');
correctButton1.id = "correctChoice";
correctButton1.textContent = (questionOne.correctChoice);

let otherButton1 = document.createElement('button');
otherButton1.id = "otherChoice";
otherButton1.textContent = Object.values(questionOne.questionKeys[0]);

cardOne.appendChild(myImage);
cardOne.appendChild(createQuestion);

let newAudio = new Audio('images/bidenaudio.m4a')

let questionButtons = () =>{
questionOne.questionKeys.forEach(question=>{
    let newButtons = document.createElement('button');
    newButtons.textContent = Object.values(question); 
    cardOne.insertAdjacentElement('afterend', newButtons);
});

}
questionButtons();

let buttonHandle = document.querySelectorAll('button');


buttonHandle.forEach(function(buttons){
    function buttonInfo(e){
        if(e.target.textContent ==='Wisconsin'){
            buttons.style.backgroundColor ="green";   
            scoreValue.textContent = +1;  
            newAudio.play();  
        } else {
            buttons.style.backgroundColor = "red";
            let answer=document.createElement("p");
            answer.textContent = "Wrong! The correct choice is " + Object.values(questionOne.questionKeys[3]);
            answer.style.color = "red";
            cardOne.insertAdjacentElement('afterend', answer);
        }
    };
    buttons.addEventListener('click', buttonInfo);
})



 
    /*if (Object.keys(questionOne.questionKeys[i]=== "correctChoice")){
    item.style.backgroundColor ="green"; 
    scoreValue.textContent = +1; 
 } else{
    item.style.backgroundColor = "red"; 
 }
}

 ))
/*
for(let i =0;i<questionOne.questionKeys.length;i++){
console.log(questionOne.questionKeys[i]);

}
*/
/*
buttonHandle.forEach(item=>
    item.addEventListener('click', function(){
        if(Object.keys(questionOne.questionKeys==="Wisconsin"){
            item.style.backgroundColor ="green"; 
            scoreValue.textContent = +1; 
        } else{
            item.style.backgroundColor = "red";
            let answer=document.createElement("p");
            answer.textContent = "Wrong! The correct choice is " + questionOne.correctChoice;
            answer.style.color = "red";
            cardOne.insertAdjacentElement('afterend', answer);
        }
    }))
*/


/*
correctButton1.addEventListener('click', function(){
    correctButton1.style.backgroundColor= "green";
    scoreValue.textContent = +1;

} )



otherButton1.addEventListener('click', function(){
    otherButton1.style.backgroundColor= "red";
    correctButton1.style.backgroundColor= "green";
    let answer=document.createElement("p");
    answer.textContent = "Wrong! The correct choice is " + questionOne.correctChoice;
    answer.style.color = "red";
    cardOne.insertAdjacentElement('afterend', answer);
})

*/

       
  


