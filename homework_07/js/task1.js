var N = +prompt("enter natural number");
var pyramidBlock = "[~]";
var space = "   ";
var pyramid = "";

if (N && N > 0 && N <= 20) {
    for (var i = 1; i <= N; i++) {
        for (var j = 1; j <= N - i; j++) {
            pyramid += space;
        }
        for (var b = 1; b <= i; b++) {
            pyramid += pyramidBlock;
            if (b % i != 0) {
                pyramid += pyramidBlock;
            }
        }
        pyramid += "\n";
    }
    console.log(pyramid);
} else {
    console.log("Incorrect!");
}
