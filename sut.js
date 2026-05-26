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
// Install express and cookie-parser first:
// npm install express cookie-parser

const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

// Set a secure, HTTP-only cookie
app.get("/set-cookie", (req, res) => {
  res.cookie("sessionId", "abc123xyz", {
    httpOnly: true,   // prevents client-side JS access
    secure: true,     // ensures cookie only sent over HTTPS
    maxAge: 60 * 60 * 1000 // expires in 1 hour
  });
  res.send("Secure cookie set!");
});

// Read cookies
app.get("/get-cookie", (req, res) => {
  const sessionId = req.cookies.sessionId;
  res.send(`Session ID: ${sessionId}`);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
