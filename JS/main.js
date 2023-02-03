function getReceipt() {
    /* This initialises our string so that it can get passed
    from function to function, growing line by line into a full receipt*/
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0; //Here we will add price per Pizza size and toppings
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    //We check which size pizza was chosen and add it to text1
    for (let i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>"
        }
    }

    //We add a price to the runningTotal depending by the size User chose
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Small Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal; 

    //Troubleshooting section
    console.log(selectedSize + " = £" + sizeTotal + ".00");
    console.log("size text1 :" + text1);
    console.log("subtotal: £" +runningTotal+".00");

    //These Variables will get passed onto each function
    getTopping(runningTotal,text1);
};

/*In this function we will make and Array of toppings choosen by the User
add them to the showText HTML element, then calculate the price and add it
to the totalPrice HTML element */
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    //Here we check which topping boxes were checked and add them to text1 variable
    for (let j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>"
        }
    }

    //Here we calculate how much will it cost to add toppings (first topping will be free)
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);//We add the price of pizza base + price of toppings

    //Troubleshooting section
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping = "+"£"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"£"+runningTotal+".00")

    //We print text1 to HTML through showText it will show pizza size and toppigs
    document.getElementById("showText").innerHTML=text1;
    //This will print total price from runningTotal to HTML 
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>£"+
        runningTotal+".00"+"</strong></h3>";
};