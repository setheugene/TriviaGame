


window.onload = function() {

    var time = 30;
    var hasStarted = false;
    var hasFinished = false;
    var total = 0;


 $("#button").click(function() {
        hasStarted = true;
    console.log(hasStarted);

if (hasStarted === false) {
    $("#button").show(".start");
    $("#display").hide(".questions");
    
}

 if (hasStarted === true) {
    $("#button").hide(".start");
     countDown();
     $("#display").show(".questions");
     $("#done").show(".done");
     $("#timer").show(".timer");
}

var tm = setInterval(countDown,1000);

function countDown() {
    time--;
    $("#timer").text(time);
    if(time === 0){
        clearInterval(tm);
        hasFinished = true;
        done();
        console.log(hasFinished);
    }
         console.log(time);
         console.log(hasStarted);

         $("#done").click(function() {
            hasFinished = true;
            done();
         })

console.log(hasFinished);

if (hasFinished === true) {
   done()
}

function done() {
   $("#results").show(".results");
     $("#display").hide(".questions");
     $("#done").hide(".done");
   //   $("#timer").hide(".timer");
     $("#timer").text("You got " + total + " Correct!!");
}

        document.getElementById('1').onclick = function(){
            $("#results").append("Q1: Correct");
            total++
         }

         document.getElementById('2').onclick = function(){
            $("#results").append("Q1: Wrong");
         }

         document.getElementById('4').onclick = function(){
            $("#results").append("      Q2: Correct");
            total++
         }

         document.getElementById('3').onclick = function(){
            $("#results").append("      Q2: Wrong");
         }

         document.getElementById('6').onclick = function(){
            $("#results").append("      Q3: Correct");
            total++
         }

         document.getElementById('5').onclick = function(){
            $("#results").append("      Q3: Wrong");
         }

         document.getElementById('7').onclick = function(){
            $("#results").append("      Q4: Correct");
            total++
         }

         document.getElementById('8').onclick = function(){
            $("#results").append("      Q4: Wrong");
         }
      }
 })
}


 

