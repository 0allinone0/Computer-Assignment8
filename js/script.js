console.log("script.js connected!");

// Select all buttons each questions


//create an empty object that will store user data
/*let userAnswers = {}

function Answer(buttons){
    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            console.log("button clicked!");
        })
    })
    buttons.forEach(function(button){
        button.addEventListener("click", function(){        
            buttons.forEach(function(btn){
                    btn.classList.remove("selected");
            });
            button.classList.add("selected");
                //Get the data using the dataset attribute
            let buttonID = button.dataset.buttonid;
            let response = button.dataset.answer;

            //Store answers in the object
            userAnswers[buttonID]= response;
            console.log(userAnswers);    
        })
    })   
}

let buttons1 = document.querySelectorAll("#answer-buttons1 button");
let buttons2 = document.querySelectorAll("#answer-buttons2 button");
let buttons3 = document.querySelectorAll("#answer-buttons3 button");
let buttons4 = document.querySelectorAll("#answer-buttons4 button");

Answer(buttons1);
Answer(buttons2);
Answer(buttons3);
Answer(buttons4);   

console.log(userAnswers);*/

let user_answer = {};

let questions = document.querySelectorAll("#question-1");
questions.forEach(function(block, index){
    let buttons = block.querySelectorAll("#answer-buttons button");
    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            buttons.forEach(function(btn){
                btn.classList.remove("selected");
            })
            button.classList.add("selected");

            //Store user answer
            let selected_answer = button.dataset.answer;
            user_answer[index+1]=selected_answer;

            //log for testing
            console.log(`Question ${index + 1}: ${selected_answer}`);
            console.log(user_answer);
        })

    })
})

function displayResult(){
    let score = 0;

    for (let key in user_answer){
        let answer = user_answer[key];
        if (answer === 'A'){
            score +=4;
        }
        else if (answer == 'B'){
            score += 3;
        }
        else if (answer ==='C'){
            score += 2;
        }
        else if (answer === 'D'){
            score += 1;
        } 
    }
    let result_text = '';
    if (score >= 12){
        result_text = "The Overachiever!";
    }
    else if (score >= 8){
        result_text = "The Sleep-Deprived Zombie!";
    }
    else if (score >= 4){
        result_text = "The Procrastination Artist!";
    }
    else{
        result_text = "The Chaos Enthusiast!";
    }

    //display result in the page
    let result_container = document.getElementById('result-container');
    result_container.textContent = `Your Result: ${result_text}`;
    console.log(`Final Score: ${score}`);
    console.log(result_container.textContent);
}

let resultButton = document.getElementById('show-result');
resultButton.addEventListener('click', displayResult);