const collectIds = array =>
    getTransformedArray(getFilteredArray(array, el => el.rating > 3), el => el.id);
