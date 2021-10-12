let amount = document.getElementById("amount");
let year = document.getElementById("year");
let investedAmount = document.getElementById("invested-amount");
let profit = document.getElementById("returns");
let range = document.getElementById("range");

year.value = 5 ;
amount.value = 1000 ;
range.value = 10;
document.getElementById("range-value").innerHTML = range.value ;


// update on page load 
addEventListener('load', () => {
    rangeDisplay = range.value ;
    document.getElementById("range-value").innerHTML = rangeDisplay ;


    let investAmount = amount.value * 12 * year.value ;
    investedAmount.innerHTML = "Invested Amount :" + investAmount;

    let i = (range.value / 12) / 100 ;
    let n = year.value * 12 ;
    let x = Math.pow(1 + i , n)

    let sum = amount.value * ((x - 1) / i ) * (1 + i) ;
    profit.innerHTML = Math.floor(sum) ;
  });

// update on range change 
range.addEventListener('input', () => {
    rangeDisplay = range.value ;
    document.getElementById("range-value").innerHTML = rangeDisplay ;


    let investAmount = amount.value * 12 * year.value ;
    investedAmount.innerHTML = "Invested Amount :" + investAmount;

    let i = (range.value / 12) / 100 ;
    let n = year.value * 12 ;
    let x = Math.pow(1 + i , n)

    let sum = amount.value * ((x - 1) / i ) * (1 + i) ;
    profit.innerHTML = Math.floor(sum) ;
  });


// update on year change 
year.addEventListener('input', () => { 
    let investAmount = amount.value * 12 * year.value ;
    investedAmount.innerHTML = "Invested Amount :" + investAmount;

    let i = (range.value / 12) / 100 ;
    let n = year.value * 12 ;
    let x = Math.pow(1 + i , n)

    let sum = amount.value * ((x - 1) / i ) * (1 + i) ;
    profit.innerHTML = Math.floor(sum) ;
 

  });

// update on amount change 
amount.addEventListener('input', () => { 
    let investAmount = amount.value * 12 * year.value ;
    investedAmount.innerHTML = "Invested Amount :" + investAmount;

    let i = (range.value / 12) / 100 ;
    let n = year.value * 12 ;
    let x = Math.pow(1 + i , n)

    let sum = amount.value * ((x - 1) / i ) * (1 + i) ;
    profit.innerHTML = Math.floor(sum) ;
 

  });