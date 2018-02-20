const getTransformedArray = (array, callback) => {
    const transformedArray = [];
    forEach(array, el => {
        transformedArray.push(callback(el));
    });
    return transformedArray;
};
