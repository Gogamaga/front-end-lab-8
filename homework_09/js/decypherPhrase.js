function reverse(obj) {
    var newObj = {};
    for (let key in obj) {
        newObj[obj[key]] = key;
    }
    return newObj;
}
const decypherPhrase = (obj, string) => {
    const reversObj = reverse(obj);
    return cypherPhrase(reversObj, string);
};
