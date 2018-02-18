function getClosestToZero() {
    let closest = arguments[0];
    for (let index = 0; index < arguments.length; index++) {
        let difference = Math.abs(0 - arguments[index]);
        if (difference < Math.abs(closest)) {
            closest = arguments[index];
        }
    }
    return closest;
}
