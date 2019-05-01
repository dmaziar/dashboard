let crewDashboardPage = require('../../pages/crewDashboard.page');
let {Given, When, Then} = require("cypress-cucumber-preprocessor/steps");

Given("user navigates to a dashboard", ()=>{
    crewDashboardPage.open()
});

When(`user searches for {string} and city {string}`, (name, city) => {
    if (name) crewDashboardPage.nameInpFld.type(name);
    if (city) crewDashboardPage.cityInpFld.type(city);
    crewDashboardPage.submitBtn.click()
});

Then(`a crew member {string} is in state {string}`, (name, state) => {
    let stateNumber;
    if (state === 'Applied') stateNumber = 0;
    if (state === 'Interviewing') stateNumber = 1;
    if (state === 'Hired') stateNumber = 2;
    crewDashboardPage.isCrewMemberInState(stateNumber, name);
})

When(`user change crew member state {string}`, direction => {
    if (direction === 'forward') crewDashboardPage.moveForwardBtn.click();
    if (direction === 'backwards') crewDashboardPage.moveBackwardsBtn.click()
})

Then(`user can see a crew member {string} on the dashboard`, name => {
    crewDashboardPage.crewMembers.contains(name)
});

Then(`user can see empty dashboard`, () => {
    crewDashboardPage.crewMembers.should('not.exist')
});
