const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');
// The import line will look different than what is in Faker's documentation
// because we are working with an express application

// MIDDLEWARE ==============
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//==========================

const createUser = () => {
    const newFake = {
        password: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number(),
        lastName: faker.person.lastName(),
        firstName: faker.person.firstName(),
        _id: faker.string.nanoid()
    };
    return newFake;
};
const newFakeUser = createUser();
console.log(newFakeUser);

const createCompany = () => {
    const newFake = {
        _id: faker.string.nanoid(),
        name: faker.company.name(),
        address:{
            street: faker.location.street(),
            city: faker.location.city(),
            state: faker.location.state(),
            zipCode: faker.location.zipCode(),
            country: faker.location.country()
        }
    };
    return newFake;
};
const newFakeCompany = createCompany();
console.log(newFakeCompany);


app.get("/api/new/:type", (req, res) => {
    const {type} = req.params
    if (type == "users"){
        const newUser = createUser()
        console.log(newUser);
        res.json(newUser)
    }else if (type == "company") {
        const newCompany = createCompany()
        console.log(newCompany);
        res.json(newCompany)
    }
})
app.get("/api/user/company", (req, res) => {
        const newUser = createUser()
        const newCompany = createCompany()
        res.json({Fake_company : newCompany, Fake_user : newUser })
})


app.listen( port, () => console.log(`Listening on port: ${port}`) );