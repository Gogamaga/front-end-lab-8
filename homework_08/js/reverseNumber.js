function reverseNumber(int) {
    return (
        +Math.abs(int)
            .toString()
            .split("")
            .reverse()
            .join("") * Math.sign(int)
    );
}
