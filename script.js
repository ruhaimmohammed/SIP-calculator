let amount = document.getElementById("amount");
let year = document.getElementById("year");
let investedAmount = document.getElementById("invested-amount");
let profit = document.getElementById("returns");
let range = document.getElementById("range");

year.value = 5 ;
amount.value = 25000 ;
range.value = 10;
document.getElementById("range-value").innerHTML = range.value ;

// Event listener for displaying value of range 

range.addEventListener('input', () => {
    rangeDisplay = range.value ;
    document.getElementById("range-value").innerHTML = rangeDisplay ;

  });

// function to calculate SIP value 

function calculate(){
  let investAmount = amount.value * 12 * year.value ;
  investedAmount.innerHTML = "Invested Amount: " + investAmount;

  let i = (range.value / 12) / 100 ;
  let n = year.value * 12 ;
  let x = Math.pow(1 + i , n)

  let sum = amount.value * ((x - 1) / i ) * (1 + i) ;
  profit.innerHTML ="ROI: " + Math.floor(sum) ;
}

// Event Listener on page load to calculate default value 

addEventListener('load', () => {
  calculate();
  });

// funtion to trigger on button click

function calculator() { 
    calculate();
    applause.innerHTML = "HEY CONGRATULATIONS, That's a lot of money and you are rich now. 💸💸👏👏 "
 
}