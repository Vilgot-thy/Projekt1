function game(fraga){


    var y = 0
         console.log("Mellan vilka nummer vill du gissa? 1 och....")
         var fraga = prompt("1 >>");
        
         while(y!=1){
         var number = Math.floor(Math.random() * parseInt(fraga)) + 1;
         var x = 10;
         do{
             
            var input = prompt("Gissa nummret!");
             if(parseInt(input) == number){
                 console.log("du hade rätt");
                 x = 0;
             }
             else{
                 x -= 1;
                 console.log("du hade fel, du har nu "+x+" liv kvar");
                 if(x == 0){
                     console.log("du förlorade!");
                 }
             }
         }
         while(x != 0)

         console.log("Vill du spela igen?");
         var spela = prompt("2 >>")
         spela = spela.toLowerCase();

             if(spela == "ja"){
                 continue;
             }
             else{
                 y = 1;
             }
         }
}