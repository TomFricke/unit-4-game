$(document).ready(function() {
    var targetNumber = Math.floor(Math.random()*101+19);
    $("#random_number").text(targetNumber);
    var currentScore = 0;
    var num1 = Math.floor(Math.random()*11+1);
    var num2 = Math.floor(Math.random()*11+1);
    var num3 = Math.floor(Math.random()*11+1);
    var num4 = Math.floor(Math.random()*11+1);
    var userScore = 0;
    var wins = 0;
    var losses = 0;
    ("#totalScore").text(userScore);
    jQuery("#userWins").text(wins);
    jQuery("#userLosses").text(losses);
    function reset() {
        targetNumber = Math.floor(Math.random()*101+19);
        $("#random_number").text(targetNumber);
        userScore = 0;
        $("#totalScore").text(userScore);
        num1 = Math.floor(Math.random()*11+1);
        num2 = Math.floor(Math.random()*11+1);
        num3 = Math.floor(Math.random()*11+1);
        num4 = Math.floor(Math.random()*11+1);
    }
    jQuery("#pictures").on("click", "#pink-crystal", function() {
        userScore = userScore + num1;

        jQuery("#totalScore").text(userScore);

        alert("Current score: " + userScore);

        if (userScore === targetNumber) {
            alert("Good job!");
            wins++;
            jQuery("#userWins").text(wins);
            reset();
        }
        else if (userScore > targetNumber) {
            alert("try again!");
            losses++;
            jQuery("#userLosses").text(losses);
            reset();
        }
    });
    jQuery("#pictures").on("click", "#green-crystal", function() {
        userScore = userScore + num2;
        jQuery("#totalScore").text(userScore);

        alert("Current score: " + userScore);
        if (userScore === targetNumber) {
            alert("Good job!");
            wins++;
            jQuery("#userWins").text(wins);
            reset();
        }
        else if (userScore > targetNumber) {
            alert("try again");
            losses++;
            jQuery("#userLosses").text(losses);
            reset();
        }
    });
    jQuery("#pictures").on("click", "#orange-crystal", function() {
        userScore = userScore + num3;
        jQuery("#totalScore").text(userScore);

        alert("Current score: " + userScore);
        if (userScore === targetNumber) {
            alert("good job!");
            wins++;
            jQuery("#userWins").text(wins);
            reset();
        }
        else if (userScore > targetNumber) {
            alert("try again!");
            losses++;
            $("#userLosses").text(losses);
            reset();
        }
    });
    jQuery("#pictures").on("click", "#teal-crystal", function() {
        userScore = userScore + num4;
        jQuery("#totalScore").text(userScore);

        alert("Your score so far is: " + userScore);
        if (userScore === targetNumber) {
            alert("You won!");
            wins++;
            jQuery("#userWins").text(wins);
            reset();
        }
        else if (userScore > targetNumber) {
            alert("You lose!");
            losses++;
            jQuery("#userLosses").text(losses);
            reset();
        }
    });

});
