function isPrime(int) {
    let count = 0;
    for (let index = 1; index < int + 1; index++) {
        if (int % index === 0) {
            count++;
            if (count >= 3) {
                return false;
            }
        }
    }
    return true;
}
