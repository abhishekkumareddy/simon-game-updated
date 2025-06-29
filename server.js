const express = require("express");
const path = require("path");
const app = express();
const port = 8080;

// Serve static files like js.js, CSS, images, etc.
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "js.html")); // ✅ Serve HTML directly
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
