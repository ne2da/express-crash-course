import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();

const PORT = process.env.PORT || 8088;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "index.html"));
});

app.get("/features", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "features.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.resolve(__dirname, "static", "about.html"));
});
