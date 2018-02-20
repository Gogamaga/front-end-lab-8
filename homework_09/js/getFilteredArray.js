const getFilteredArray = (array, callback) => {
    const filteredArray = [];
    forEach(array, el => {
        callback(el) && filteredArray.push(el);
    });
    return filteredArray;
};
