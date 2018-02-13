var askToWantPlay = confirm("Do you want to play a game?");

var totalPrize = 0;
var prize = 10;
var max = 5;
var min = 0;
var numberGame = 1;
var attempt = 4;
if (!askToWantPlay) {
    console.log("You did not become a millionaire");
} else {
    while (askToWantPlay) {
        var random = getRandom(min, max * numberGame);
        var currentPrize = prize;
        for (var i = 1; i < attempt; i++) {
            var number = prompt(
                `enter number from ${min} to ${max * numberGame}
                Attempts left ${attempt - i}
                total prize ${totalPrize}
                possible prize on current attempts ${currentPrize}`
            );
            if (random == number) {
                numberGame += 1;
                totalPrize += currentPrize;
                prize = prize * numberGame;
                console.log("Thank you for a game. Your prize is:" + totalPrize);
                askToWantPlay = confirm(`You win, want play again you total prize ${totalPrize}`);
                break;
            }
            currentPrize = Math.floor((currentPrize /= 2));
            if (i === 3) {
                prize = 10;
                numberGame = 1;
                totalPrize = 0;
                askToWantPlay = confirm("You lose, want play again");
                console.log("You did not become a millionaire");
            }
        }
    }
}

function getRandom(min, max) {
    var rand = Math.random() * (max - min) + min;
    return Math.round(rand);
}
