//Expenses
const expenseInput = document.getElementById('expenseInput');

const expenseButton = document.getElementById('expenseButton');


let total =0;
expenseButton.addEventListener('click', function(){
    console.log('Button clicked')
    const inputValue = document.getElementById('expenseInput').value;
    total += Number(inputValue);
    document.getElementById('totalExpenses').textContent = "K"+ total;
    expenseInput.value = "";

});

//Savings

const savingsInput = document.getElementById('savingInput');

const savingsButton = document.getElementById('savingButton');


let total2 =0;
savingsButton.addEventListener('click', function(){
    console.log('Button clicked')
    const inputValue = document.getElementById('savingInput').value;
    total2 += Number(inputValue);
    document.getElementById('totalSavings').textContent = "K"+ total2;
    savingsInput.value = "";

});

//Investments

const investmentInput = document.getElementById('investmentInput');

const investmentButton = document.getElementById('investmentButton');

investmentButton.addEventListener('click', function(){
    console.log('Button clicked')
    const inputValue = document.getElementById('investmentInput').value;
    document.getElementById('totalInvestments').textContent =inputValue;
    investmentInput.value = "";

});