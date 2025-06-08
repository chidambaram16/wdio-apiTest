const axios = require('axios');
let response;

const { Given, Then } = require('@wdio/cucumber-framework');
const expect = require('expect').expect;

Given('I send a GET request to {string}', async (url) => {
    response = await axios.get(url);
    console.log(response);
});

Then('the response status should be {int}', (statusCode) => {
    console.log("The response status is: "+response.status);
    expect(response.status).toBe(statusCode);
    console.log("Response status validated successfully");
});

Then('the response should contain the name {string}', (name) => {
    console.log("The response data name is: "+response.data.name);
    expect(response.data.name).toBe(name);
    console.log("Response data name validated");
});
