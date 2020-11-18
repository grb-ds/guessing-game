
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
        } else {
            message = `Bummer... You guessed ${guess_number} and the secret number was ${secret_number}`;
            document.getElementById("image").style.visibility = "hidden";
        }
           document.getElementById("target").innerHTML = message;


    });

})();
