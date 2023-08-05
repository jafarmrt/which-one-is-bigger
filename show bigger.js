function biggerOne() {
    var x = document.getElementById("firstNumber").value;
    var y = document.getElementById("secondNumber").value;
    // I didnt know the parseInt and it took 2 days to find a answer to solve the bug. 
  //1.Document.getElementById() returns "String" type value and comparison between two string will act differently
  /*2.change type of x and y to number and then try to compare.for convert you can use Number or parsint

if (Number(x) > Number(Y))
//some code
else
some code*/
    if (parseInt(x) > parseInt(y)) {   
    document.getElementById("Result").innerHTML=x;
    
     } else {
    
    document.getElementById("Result").innerHTML=y;
        }
       
        
    }

