// income and expanse  handaler
document
  .getElementById("calculate-expense")
  .addEventListener("click", function (event) {
    console.log(event);

    /*================ get Data form inut flields =============*/
    const income = getInputValeAndParse("income");
    const food = getInputValeAndParse("food");
    const rent = getInputValeAndParse("rent");
    const cloth = getInputValeAndParse("cloth");

    // debugger;

    /* ============== Income  Validation  ===================*/
    if (isNaN(income)) {
      errorMessage(
        "income-error-success",
        " string are not  allow ??",
        "block"
      );
      //return;
    } else if (income <= 0) {
      errorMessage(
        "income-error-success",
        "Plase Give Valid Income   ??",
        "block"
      );
      //return;
    } else {

      errorMessage("income-error-success", "", "none");

    }
    /* ============== Food Validation  ===================*/
    if (isNaN(food)) {

         errorMessage("food-error-success", "String are not allow ??", "block");

    } else if (food < 0) {

        errorMessage(
            "food-error-success",
            "food can not nagative Value allow ??",
            "block"
        );

    } else {
         errorMessage("food-error-success", "", "none");
    }


    /* ============== rent Validation  ===================*/
        if (rent < 0) {
        errorMessage(
            "rent-error-success",
            "rent can not nagative Value allow ??",
            "block"
        );
        } else if (isNaN(rent)) {
             errorMessage("rent-error-success", "Plase Give Valid Number", "block");
        } else {
              errorMessage("rent-error-success", "", "none");
        }



    /* ============== Cloth Validation  ===================*/

    if (isNaN(cloth)) {
      errorMessage("cloth-error-success", "String  are not Allow ??", "block");
    } else if (cloth < 0) {
      errorMessage("cloth-error-success", "Plase Give Valid Numvber", "block");
    } else {
      errorMessage("cloth-error-success", "", "none");
    }


    /*====================== cheack all validation data ================*/

    if (income <= 0 || food < 0 || rent < 0 || cloth < 0) return;
    if (isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(cloth)) return;

    /*================== calculation data =======================*/

            const totalExpense = food + rent + cloth;
            const balance = income - totalExpense;

    //  console.log('Balance = ', balance, " total Expense = ",totalExpense);
     /* =========================== Check your balance and total Expanse ================== */
            if (totalExpense > income) {
            errorMessage(
                "balance-error-success",
                "Your Income Less = " +
                income +
                " then Totel Expense =  " +
                totalExpense,
                "block"
            );

            return;
            } else {
            errorMessage("balance-error-success", "", "none");
            }

            /*====================== Show Data ===============*/
                setTextContentValue("total-expense", totalExpense);
                setTextContentValue("total-balance", balance);

    //console.log("income = ", income , ' Food = ', food, " rend = ", rent, " cloth = ", cloth);
  });




// get input value form input field
function getInputValeAndParse(inputId) {

    const getInput = document.getElementById(inputId);
    const parseInput = parseFloat(getInput.value);
    return parseInput;

}



// show error message function

function errorMessage(errorId, errorText, showMessage) {
 
    const getErrorId = document.getElementById(errorId);
    getErrorId.classList.add("invalid-feedback");
    getErrorId.style.display = showMessage;
    getErrorId.innerText = errorText;

}



// get Inner Text from Text Content
function getTextConvetValue(testContentId) {

    const getText = document.getElementById(testContentId);
    const paresTextContent = parseFloat(getText.innerText);
    return paresTextContent;

}



// set innerText from Text Content

function setTextContentValue(testContentId, showText) {

    const getText = document.getElementById(testContentId);
    getText.innerText = showText;

}



// saving calculation

document.getElementById("save-btn").addEventListener("click", function (event) {
        // console.log(event);

        const saving = getInputValeAndParse("save");
        const balance = getTextConvetValue("total-balance");

        //console.log("balance = ", balance);
        // console.log("saving ", saving, " balance = ", balance);
            /*=============== cheack balance zerro or more  =================== */
          //  debugger;
        if (isNaN(balance)) {
            errorMessage("zero-error-success", "Your balance is not enough", "block");
           
        } else if(balance <= 0){
          errorMessage("zero-error-success", "Balance zero Or less", "block");
          
        }  else {
            errorMessage("zero-error-success", "", "none");
        }

        
        /*=============== input saving file validation =================== */
      //  debugger;
        if (isNaN(saving)) {
            errorMessage("saving-error-success", "String are not allow", "block");
            
        } else if (saving <= 0) {
            errorMessage("saving-error-success", "Place Give Valid Number ", "block");
          
        } else {
            errorMessage("saving-error-success", "", "none");
        }
       

  // console.log(savingInParsen);

  /*========================= calculation  savings ============================== */

           const savingInParsen = (balance * saving) / 100;
           const remaingBalance = balance - savingInParsen;

  /*===========================  balance and saving balance Validation =================== */
        if(balance == 0){
          errorMessage(
            "result",
            "You Balance is  = " + balance,
            "block"
            );
        }
       else  if (balance < savingInParsen) {
                errorMessage(
                "result",
                "You can not saving  more than balance = " + balance,
                "block"
                );
               
            } else {
                errorMessage("result", "", "none");
            }

            if(balance <=0 || saving <= 0 || (savingInParsen > balance)){
              return ;
            }
          

            /*================== show data  ============== */
            setTextContentValue("remaing-balance", remaingBalance);
            setTextContentValue("saving-amount", savingInParsen);
});
