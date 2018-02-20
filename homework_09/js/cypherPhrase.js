const cypherPhrase = (obj, string) => {
    const arr = [...string];
    return getTransformedArray(arr, el => {
        let newChar;
        for (let key in obj) {
            if (key === el) {
                return obj[key];
            }
        }
        return el;
    }).join("");
};
