var a = +prompt("enter first side");
var b = +prompt("enter second side");
var c = +prompt("enter third side");
var S;
if (!a || !b || !c || a <= 0 || c <= 0 || b <= 0) {
    console.log("Incorrect data");
} else if (a * a == b * b + c * c || b * b == a * a + c * c || c * c == b * b + a * a) {
    if (a > b && a > c) {
        S = rightTriagleSquare(c, b);
    } else if (b > a && b > c) {
        S = rightTriagleSquare(c, a);
    } else {
        S = rightTriagleSquare(a, b);
    }
    console.log(`Type of triangle is Right triangle  and square is ${S}`);
} else if (a === b && a === c) {
    S = equilateralSquare(a);
    console.log(`Type of triangle is Equilateral triangle and square is ${S}`);
} else if (a === b || a === c || c === b) {
    if (a === b) {
        S = isoscelesSquare(c, a);
    } else if (a === c) {
        S = isoscelesSquare(b, a);
    } else {
        S = isoscelesSquare(a, b);
    }
    console.log(`Type of triangle is Isosceles triangle and square is ${S}`);
} else if (a !== b && a !== c && b !== c) {
    S = scaleneSquare(a, b, c);
    console.log(`Type of triangle is Scalene triangle and square is ${S}`);
}

function isoscelesSquare(baseTriagle, side) {
    var square = baseTriagle / 4 * Math.sqrt(4 * (side * side) - baseTriagle * baseTriagle);
    return square.toFixed(2);
}
function rightTriagleSquare(side1, side2) {
    return (side1 * side2 / 2).toFixed(2);
}
function equilateralSquare(side) {
    return (side * side * Math.sqrt(3) / 4).toFixed(2);
}
function scaleneSquare(side1, side2, side3) {
    var P = (side1 + side2 + side3) / 2;
    S = Math.sqrt(P * (P - side1) * (P - side2) * (P - side3));
    return S.toFixed(2);
}
