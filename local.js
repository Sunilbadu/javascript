// Save data to localStorage
localStorage.setItem("username", "Sunil");

// Retrieve data from localStorage
let user = localStorage.getItem("username");
console.log(user); // Output: Sunil

// Update data in localStorage
localStorage.setItem("username", "SunilBadu");

// Remove a specific item
localStorage.removeItem("username");

// Clear all localStorage data
localStorage.clear();

// Save data to sessionStorage
sessionStorage.setItem("username", "Sunil");

// Retrieve data from sessionStorage
let user = sessionStorage.getItem("username");
console.log(user); // Output: Sunil

// Update data in sessionStorage
sessionStorage.setItem("username", "SunilBadu");

// Remove a specific item
sessionStorage.removeItem("username");

// Clear all sessionStorage data
sessionStorage.clear();
