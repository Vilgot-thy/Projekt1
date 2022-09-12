var ps = require("prompt-sync");
var prompt = ps();

var y = 0;

do{
var number = Math.floor(Math.random() * 101);
var x = 10;
console.log(parseInt(number));

do{
    var input = prompt(">>")

    if(parseInt(input) == number){
        console.log("du hade rätt");
        x = 0
    }
    else{
        x -= 1;
        console.log("du hade fel, du har nu "+x+" liv kvar");
        if (x == 4)
        {
            console.log("Här får det ett tips tallet är mindre än " + (number + x));
        }
        else if (x == 2)
        {
            console.log("Här får det ett tips tallet är mera än " + (number - x));
        }
        if(x == 0){
            console.log("du förlorade!");
        }
    }
}
while(x != 0)

console.log("Vill du spela igen?");
var spela = prompt(">>");
spela = spela.toLowerCase();

    if(spela == "ja"){
        continue;
    }
    else {
        y = 1;
    }
}
while(y!=1)