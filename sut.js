let user = document.getElementById("un").textContent
let pass = document.getElementById("passw").value
let x =  document.getElementsByTagName("button")[0]
x.
// Set a cookie
document.cookie = "username=Sunil; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";

// Read cookies
console.log(document.cookie);

// Update a cookie
document.cookie = "username=SunilBadu; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";

// Delete a cookie (set expiry in the past)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";

// Set a cookie
document.cookie = "username=Sunil; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";

// Read cookies
console.log(document.cookie);

// Update a cookie
document.cookie = "username=SunilBadu; expires=Fri, 31 Dec 2026 23:59:59 GMT; path=/";

// Delete a cookie (set expiry in the past)
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
