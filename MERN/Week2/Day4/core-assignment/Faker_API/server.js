const express = require("express");
const app = express();
const port = 8000;
// import { faker } from '@faker-js/faker';
const { faker } = require("@faker-js/faker")



const CrateUser = () => {
    const user = {
        password : faker.internet.password(),
        email : faker.internet.email() ,
        phoneNumber : faker.phone.number(),
        lastName : faker.name.lastName(),
        firstName : faker.name.firstName(),
        _id : faker.datatype.uuid(),
    }
}

const CrateCompany  = ()=> {
    const Company  = {
        name : faker.company.name(),
        _id : faker.datatype.uuid(),
        phoneNumber : faker.phone.number(),
        address : {
                        street : faker.address.street(),
                        city :faker.address.city(),
                        zipCode :faker.address.zipCode(),
                        country :faker.address.country(),

        }
    }
}

// const newUser = CrateUser();
const newCompany = CrateCompany();



app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

app.get("/api/users/new", (req, res) => {

  //res.json({ newUser});
    return res.json({ message: "user"});

});

app.get("/api/companies/new", (req, res) => {
    // const newCompany = CrateCompany();
    // res.json({ newCompany});
    res.json({ message:"newCompany"});

});

app.get("/api/user/company", (req, res) => {
    
    
    res.json({ newCompany});
    // res.json({  message:"newCompany and user"});
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );