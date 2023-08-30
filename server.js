const path = require("path")
const express = require("express");
const port = 4000;

// Imports
const productRouter = require("./routes/product");
const shopRouter = require("./routes/shop");

const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.status(200).sendFile(path.join(__dirname, "views", "index.html"));
})

app.use("/api/products", productRouter);
app.use("/api/shops", shopRouter);

app.use(function (req, res) {
    res.status(404).send("Invalid route, route not found");
})

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
})