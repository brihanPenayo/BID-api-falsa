const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

class Product {
    constructor() {
        this.name = faker.random.words();
        this.price = "$" + faker.commerce.price();
        this.department = faker.commerce.department();
    }
}

console.log(new Product());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json("HolaMundo")
})

app.listen(port);