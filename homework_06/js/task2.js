var euro = +prompt("euro");
var usd = +prompt("usd");

var usdRate = 27.124;
var euroRate = 33.2324;

if (!euro || !usd || euro <= 0 || usd <= 0) {
    console.log("Incorect data");
} else {
    var uahFromEuro = (euro * euroRate).toFixed(2);
    var uahFromUsd = (usd * usdRate).toFixed(2);
    console.log(
        `${euro} euros are equal ${uahFromEuro} UAH, ${usd} dollars are equal ${uahFromUsd} UAH, one euro is equal ${(
            euroRate / usdRate
        ).toFixed(2)} dollars `
    );
}
