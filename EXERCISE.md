1. Create a feature file (`YOUR_FEATURE_NAME.feature`) in `cypress/e2e/` folder. Example `GoogleSearch.feature`  
2. Copy the first Scenario from here to the feature file
3. Create a folder with name same as your feature file name in `cypress/e2e/`. Example  `cypress/e2e/GoogleSearch/`
4. Create a step definition file in that folder with any name. you can use this format `YOUR_FEATURE_NAME.steps.js`. Example  `cypress/e2e/GoogleSearch/GoogleSearch.steps.js`
5. Start writing Steps for your first scenatio, check `cypress/e2e/GoogleSearch/GoogleSearch.steps.js` as a reference 



# Feature: Login to food delivery app

#     Scenario: I have valid credentials

#         Given that I am on the login page "https://app.maxgood.work"
#         When I enter my username "admin@berteig.com"
#         And I enter my password "1234567890"
#         And I click the submit button
#         Then I should login in the system with a message saying "[OK] Logged In Successfully"

#     Scenario: I don't have credentials

#         Given that I am on the login page "https://app.maxgood.work"
#         When I enter my username "aa@aa.cc"
#         And I enter my password "1122334455"
#         And I click the submit button
#         Then I should see a message saying "[Unauthorized] Invalid Login Credentials."

#     Scenario: I have valid password but I don't have valid username

#         Given that I am on the login page "https://app.maxgood.work"
#         When I enter my username "a@b.c"
#         And I enter my password "1122334455"
#         And I click the submit button
#         Then I should see a message saying "[Bad Request] Invalid Email Address."

#     Scenario: I have valid username but I don't have valid password

#         Given that I am on the login page "https://app.maxgood.work"
#         When I enter my username ""
#         And I enter my password ""
#         And I click the submit button
#         Then I should see a message saying "[Bad Request] Invalid Password. It should be between 8 and 30 characters."

#     Scenario: I have valid username but I don't have valid password

#         Given that I am on the login page "https://app.maxgood.work"
#         When I enter my username ""
#         And I enter my password ""
#         And I click the submit button
#         Then I should see a message saying "[Bad Request] Invalid Email Address. Invalid Password. It should be between 8 and 30 characters."