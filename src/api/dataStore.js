// gets specified attribute from local storage
export const getAttribute = (key) => {
    // gets item from local storage and returns it
    return window.localStorage.getItem(key);
};

// sets specified attribute in local storage
export const setAttribute = (key, value) => {
    // sets item to specified value in local storage
    window.localStorage.setItem(key, value);
};

// gets all values and defaults
export const getData = () => {
    // stores result
    let result = { };

    // iterates through all data keys
    Object.keys(setters).forEach(key => {
        // adds value to result with null safety (if data is not stored, use specified default for the field)
        result[key] = getAttribute(key) || setters[key][1];
    });

    return result;
};

// setter functions for auto refresh
export const setters = { };
