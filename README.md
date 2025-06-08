# wdio-apiTEst
A simple Webdriver IO Cucumber framework to test Public API 

BDD Gherin Cucumber are written 

# Fresh wdio cucumber project initialization 
1. mkdir wdio-Test
2. cd wdio-apiTest
3. npm init -y

# Install WDIO CLI and Setup 
1. npm install --save-dev @wdio/cli
2. npx wdio config
3. npm instal axios 

# Run commands 
1. npm install
2. npx wdio run wdio.conf.js

# Test case flow
Get a user by ID from the API 
1. Hit the API with the URL. It returns data 
2. Validate the status code
3. Validate the name