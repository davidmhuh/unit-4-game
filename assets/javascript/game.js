$(document).ready(function() {

// .. stuff .. //
 var wins = 0;
 var losses = 0;
 var computerScore = [];
 var myScore = 0;

 //.. scoreboard ..//

 $("#wins").text(wins);
 $("#losses").text(losses);

 // .. computer generator number ..//

 var random =Math.floor(Math.random() * 101 + 19);
 $("#computerScore").text(random);
 
 // .. user crystal generator number ..//
 
 var crystal1 = Math.floor(Math.random() * 12 + 1);
     console.log(crystal1);
 var crystal2 = Math.floor(Math.random() * 12 + 1);
     console.log(crystal2);
 var crystal3 = Math.floor(Math.random() * 12 + 1);
     console.log(crystal3);
 var crystal4 = Math.floor(Math.random() * 12 + 1);
     console.log(crystal4);
 
 });
 //.. restart ..//
 function restart() {
     var random =Math.floor(Math.random() * 101 + 19);
     crystal1 = Math.floor(Math.random() * 12 + 1);
     crystal2 = Math.floor(Math.random() * 12 + 1);
     crystal3 = Math.floor(Math.random() * 12 + 1);
     crystal4 = Math.floor(Math.random() * 12 + 1);
     $("#computerScore").text(random);
     userScore = 0;
     $("yourScore").text(userScore);
 }
 //.. restart if win or loss..//
 function win() {
     wins++;
     $("wins").text(wins);
     restart();
 }
 function lose() {
     losses++;
     $("losses").text(losses);
     restart();
 }

 var random =Math.floor(Math.random() * 109 + 11);
    console.log(random);
    $("#computerScore").text(random);

 // .. crystal one .. // 
    $(".image").on("click", function() {
        userScore = userScore + crystal1;
        $("yourScore").text(myScore);
        if (userScore === random) {
            win();
        console.log(userScore)
        }
        else if (myScore > random) {
            lose();
        }         
     });
     
 
 // .. crystal two .. //

    $(".image").on("click", function() {
        userScore = userScore + crystal2;
        $("yourScore").text(userScore);
        if (userScore === random) {
            win();
    }
        else if (userScore > random) {
            lose();
    }         
 });

 // .. crystal three .. //

    $(".image").on("click", function() {
        userScore = userScore + crystal3;
        $("yourScore").text(userScore);
        if (userScore === random) {
            win();
    }
        else if (userScore > random) {
            lose();
    }         
 });
 // .. crystal four .. // 

    $(".image").on("click", function() {
        userScore = userScore + crystal1;
        $("yourScore").text(userScore);
        if (userScore === random) {
            win();
    }
        else if (userScore > random) {
            lose();
    }         
 });

