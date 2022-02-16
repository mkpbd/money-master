// income and expanse  handaler 
document.getElementById('calculate-expense').addEventListener('click', function(event){

    console.log(event);

        const income = getInputValeAndParse('income');
        const food = getInputValeAndParse('food');
        const rent = getInputValeAndParse('rent');
        const cloth = getInputValeAndParse('cloth');

       // debugger;
        if(income <= 0 || isNaN(income)){
            errorMessage('income-error-success', 'income only positeve value allow ??', 'block');
            //return;
        }
        
        if( food <0 || isNaN(food)){
           
           errorMessage('food-error-success', 'food can not nagative Value allow ??', 'block');
            
        }
        
        if( rent <0 || isNaN(rent)){
           
           errorMessage('rent-error-success', 'rent can not nagative Value allow ??', 'block');
            
        }
        
        if( cloth <0 || isNaN(cloth)){
           
           errorMessage('cloth-error-success', 'cloth can not nagative value  allow ??', 'block');
            
        }
        
        if(income <= 0 || food <0 || rent < 0 || cloth < 0 ) return;
        if(isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloth) ) return;

        const totalExpense = food + rent + cloth;
        const balance = income - totalExpense;

      //  console.log('Balance = ', balance, " total Expense = ",totalExpense);

      getTestContentShowAndReturnValue('total-expense' ,totalExpense);
      getTestContentShowAndReturnValue('total-balance' ,balance);

        //console.log("income = ", income , ' Food = ', food, " rend = ", rent, " cloth = ", cloth);
});

// get input value form input field 
function getInputValeAndParse(inputId){

    const getInput = document.getElementById(inputId);
    const parseInput = parseFloat(getInput.value);

    return parseInput;

}

// show error message function 

function errorMessage (errorId , errorText, showMessage){

    const getErrorId = document.getElementById(errorId);
    getErrorId.classList.add('invalid-feedback')
    getErrorId.style.display = showMessage;
    getErrorId.innerText = errorText;
    
    
}

// get TestContent value sate and get value from text content 

function getTestContentShowAndReturnValue(testContentId, showText){

    const getText = document.getElementById(testContentId);

    getText.innerText = showText;

    const paresTextContent = parseFloat(getText.innerText);

    return paresTextContent;
}

