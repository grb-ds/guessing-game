
(function() {

    // your code here

    alert("Guessing-Game");
    let learners = 22;
    let message;

    var getRandomNumber = (maxValue) => {
        return Number(Math.floor(Math.random() * maxValue)) + 1;
    }


    document.getElementById("run").addEventListener("click", function (){

        let secret_number = getRandomNumber(learners);
        const guess_number = Number(document.getElementById('guess-number').value);

        if (guess_number === secret_number){
            message = `Awesome! You number ${guess_number} was correct. You can be named many things, hungry not being one of them.`;
            document.getElementById("image").style.visibility = "visible";
        }
        else if ( (guess_number === secret_number -1) || (guess_number === secret_number +1)){
            message = `"So close, but you just missed it! Are you in a class that started on the thirteenth or what?"`;
            document.getElementById("image").style.visibility = "hidden";
        }
        else {
            message = `Bummer... You guessed ${guess_number} and the secret number was ${secret_number}`;
            document.getElementById("image").style.visibility = "hidden";
        }
           document.getElementById("target").innerHTML = message;


    });

})();
