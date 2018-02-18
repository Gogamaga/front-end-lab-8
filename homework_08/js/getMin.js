function getMin() {
    let min = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        min = arguments[i] < min ? arguments[i] : min;
    }
    return min;
}
