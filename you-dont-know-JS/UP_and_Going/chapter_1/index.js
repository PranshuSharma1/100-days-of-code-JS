let Bank_balance=10000;

let Accessories_PRICE=129;
let Phone_PRICE=1000;
let Spending_threshold=8000;
let TAX=0.08;



function Calculate_TAX(amount){
    return amount*TAX;

}

let i=0;
var amount=0;
while(amount<=Spending_threshold){
    amount=amount+Accessories_PRICE+Phone_PRICE;
    console.log("have bought the ",i," phone and ",i," accessories.");
    console.log("the amount is :-",amount);
    i++;
}


// for(var amount=0;amount<=Spending_threshold;amount=amount+Accessories_PRICE+Phone_PRICE){
//     console.log("have bought the ",i," phone and ",i," accessories.");
//     console.log("the amount is :-",amount);
//     i++;
// }



console.log("the total amount is :- ",amount)

console.log("the total TAX of your purchase of", amount," is :- ", Calculate_TAX(amount));
console.log("the total price of the PHONE purchase is :-", amount+Calculate_TAX(amount));

// for (i=0;i<9;i++){
//     console.log(i);
// }



if ( Bank_balance > amount+Calculate_TAX(amount)){
    console.log("You can purchase the items, aka you can afford it");
}
else{
    // console.log(Bank_balance);
    // console.log(amount+Calculate_TAX(amount));
    console.log("the purchased items amount is too much, You can't Afford it for NOW!!!!");
    console.log("come back later and think HOW CAN YOU AFFORD THIS!!!!!!!!!!!!!");
}