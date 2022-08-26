const container = document.querySelector('.container');
container.classList = "container";
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.alignItems = "center";

const title = document.createElement("h1");
title.textContent = "Number Generator";
title.style.fontSize = "30px";
title.style.color = "#72b061";
title.style.fontFamily = "sans-serif";
title.style.letterSpacing = "1px";
title.style.margin = "20px 0px 5px 0px";
container.appendChild(title);

const subtitle = document.createElement("h2");
subtitle.textContent = "30DaysOfJavaScript: DOM Day 2"
subtitle.style.margin = "0";
subtitle.style.fontSize = "20px";
subtitle.style.fontFamily = "sans-serif";
subtitle.style.fontWeight = "lighter";
container.appendChild(subtitle);

const author = document.createElement("h4");
author.textContent = "Author: Javiera Rico";
author.style.textDecoration = "underline"
author.style.fontSize = "16px";
author.style.fontFamily = "sans-serif";
author.style.fontWeight = "lighter";
author.style.margin = "5px 0px 25px 0px";
container.appendChild(author);

/*INPUT AND BUTTON*/
const inputWrapper = document.createElement('div');
container.appendChild(inputWrapper);

let errVal = document.createElement('p');
errVal.classList = "errVal";
errVal.style.color = "red";
errVal.style.fontFamily = "sans-serif";
errVal.style.margin = "0px 0px 5px 0px";
inputWrapper.appendChild(errVal)

let input = document.createElement('input');
input.classList = "input-txt";
input.placeholder = "Generate More Numbers..."
input.setAttribute("type","text");
input.style.width = "50vw";
input.style.marginRight = "20px";
input.style.border = "1px solid #72b061";
input.style.padding = "10px";
inputWrapper.appendChild(input);

const button = document.createElement('button');
button.classList = "input-btn";
button.id = "generateNumbers";
button.textContent = "Generate Numbers";
button.style.backgroundColor = "#72b061";
button.style.border = "none";
button.style.padding = "11px";
button.style.color = "white";
button.style.cursor = "pointer";
inputWrapper.appendChild(button);

button.addEventListener("mouseenter", function(){
    button.style.backgroundColor = "#84b078";
});

button.addEventListener("mouseleave", function(){
    button.style.backgroundColor = "#72b061";
});

input.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        e.preventDefault();
        document.getElementById('generateNumbers').click();
    }
});

let inputValue = document.querySelector('.input-txt');

const inputVal = button.addEventListener('click', e=>{
    let inputNum = parseInt(inputValue.value);
    if (inputValue.value == ""){
        errVal.textContent = "Enter a number value in the input field to generate numbers.";
        //console.log("empty");
    } else if (isNaN(inputNum)){
        errVal.textContent = "Input value must be a number.";
        //console.log(inputNum);
        //console.log(typeof inputNum);
        //console.log("Please enter a number");
    } else {
        errVal.textContent = "";
        //console.log("not nan");
        let numContainer = document.querySelector('.number-container');
        numContainer.remove();
        //llamamos a la funcion que crea x numeros
        numbers(inputNum);
    }
    inputValue.value = "";
});

/*NUMBER GRID*/
const numbers = (nbr) => {
    const numberGenerator = document.createElement('div');
    numberGenerator.classList = "number-container";
    numberGenerator.style.display = "grid";
    numberGenerator.style.gap = ".5rem";
    numberGenerator.style.gridTemplateColumns = "repeat(auto-fill, minmax(5rem, 1fr))";
    numberGenerator.style.gridAutoRows = "1fr";
    numberGenerator.style.gridAutoFlow = "dense";
    numberGenerator.style.margin = "1rem 5rem";
    document.body.appendChild(numberGenerator);

    const isPrime = (num) => {
        for (let i = 2; i < num; i++){
            if (num % i === 0) return false;
        }
        return num > 1;
    };

    let numberContainer;
    let number;
    for(let i = 0; i < nbr; i++){
        numberContainer = document.createElement('div');
        numberContainer.classList = "number-div";
        //numberContainer.style.padding = ".5rem 2rem";
        //numberContainer.style.width = "6rem";
        numberGenerator.appendChild(numberContainer);        
        number = document.createElement('p');
        number.className = "number";
        number.textContent = i;
        number.style.color = "#ffff";
        number.style.fontFamily = "sans-serif";
        number.fontWeight = "bolder"
        number.style.fontSize = "3rem"
        number.style.margin = "0px auto";    
        number.style.display = "flex";
        number.style.alignItems = "center";
        number.style.justifyContent = "center";
        //console.log(number.innerHTML);
        numberContainer.appendChild(number);
        //EVEN NUMBERS GREEN - ODD NUMBERS YELLOW - PRIME NUMBERS RED
        if (i == 0){
            numberContainer.style.backgroundColor = "#72b061";
        } else if (i >= 1){
            if(i % 2 == 0){
                numberContainer.style.backgroundColor = "#72b061";                                
            } else {
                numberContainer.style.backgroundColor = "#fce758";
            }
            if(isPrime(i)){
                numberContainer.style.backgroundColor = "#f54e42";
            }
        }
    }
}
numbers(50);