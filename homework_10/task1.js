function debounce(callback, delay) {
    let iterator = 0;
    let id = null;
    return () => {
        if (id) {
            clearTimeout(id);
        }
        id = setTimeout(() => callback(iterator), delay);
    };
}
