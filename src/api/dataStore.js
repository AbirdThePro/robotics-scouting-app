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

// setter functions for auto refresh
export const setters = { };
