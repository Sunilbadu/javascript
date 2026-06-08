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
