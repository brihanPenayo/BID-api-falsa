const { faker } = require('@faker-js/faker');
const express = require("express");
const app = express();
const port = 8000;

class Usuario {
    constructor() {
        this._id = faker.random.numeric(3);
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.phoneNumber = faker.phone.number();
        this.email = faker.internet.email();
        this.password = faker.internet.password(8);
    }
}

class Empresa {
    constructor() {
        this._id = faker.random.numeric(3);
        this.name = faker.company.name();
        this.address = [
            {
                street: faker.address.street(),
                city: faker.address.city(),
                state: faker.address.state(),
                postalCode: faker.address.zipCode(),
                country: faker.address.country()
            }
        ]
    }
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json(`Bienvenido! Esto es una API Falsa`)
})

app.get("/users/new", (req, res) => {
    res.json(new Usuario())
})

app.get("/companies/new", (req, res) => {
    res.json(new Empresa())
})

app.get("/user/company", (req, res) => {
    res.json([
        {
            Usuario: new Usuario(),
            Company: new Empresa()
        }
    ])
})

app.listen(port);