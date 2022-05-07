const btn = document.getElementById('#btn');

function calculate(value){
    let amount = document.getElementById('bill_amount').value;
    var tip, percentage;
    
    if (amount == ""){
    alert("Please enter a value");
}
 else if (isNaN(amount))
 {
       alert("Please insert only numbers"); 
}
else if(amount>=100 && amount<300){
    percentage = 10;
    tip = amount * 10/100 ;
}
else if(amount>=300 && amount<500){
    percentage = 5;
    tip = amount * 5/100;
}
else if (amount>=500){
    percentage = 3;
    tip = amount * 3/100;

}
document.getElementById('tip_perc').value = percentage;
document.getElementById('tip_total').value = tip;
}
   
