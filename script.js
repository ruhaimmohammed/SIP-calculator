// update on range change 
let amount = document.getElementById("amount");
let year = document.getElementById("year");
let investedAmount = document.getElementById("invested-amount");
let profit = document.getElementById("returns");
let range = document.getElementById("range");

year.value = 5 ;
amount.value = 25000 ;
range.value = 10;
document.getElementById("range-value").innerHTML = range.value ;

addEventListener('load', () => {
    let investAmount = amount.value * 12 * year.value ;
    investedAmount.innerHTML = "Invested Amount: " + investAmount;

    let i = (range.value / 12) / 100 ;
    let n = year.value * 12 ;
    let x = Math.pow(1 + i , n)

    let sum = amount.value * ((x - 1) / i ) * (1 + i) ;
    profit.innerHTML ="ROI: " + Math.floor(sum) ;
  });

range.addEventListener('input', () => {
    rangeDisplay = range.value ;
    document.getElementById("range-value").innerHTML = rangeDisplay ;

  });



function calculator() { 
    let investAmount = amount.value * 12 * year.value ;
    investedAmount.innerHTML = "Invested Amount: " + investAmount;

    let i = (range.value / 12) / 100 ;
    let n = year.value * 12 ;
    let x = Math.pow(1 + i , n)

    let sum = amount.value * ((x - 1) / i ) * (1 + i) ;
    profit.innerHTML = "ROI: " + Math.floor(sum) ;
    applause.innerHTML = "HEY CONGRATULATIONS, That's a lot of money and you are rich now. 💸💸👏👏 "
 

  }


