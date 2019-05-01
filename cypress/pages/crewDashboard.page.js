let Page = require('./page');
let crewMembers = '.CrewMember-container'

let CrewDashboardPage = Object.create(Page, {
    appColumns: {get: function () {return cy.get('.App-column') }},
    crewMembers: {get: function () {return cy.get(crewMembers)}},
    nameInpFld: {get: function () {return cy.get('#name') }},
    cityInpFld: {get: function () {return cy.get('#city') }},
    submitBtn: {get: function () {return cy.get('[type="submit"]') }},
    moveForwardBtn: {get: function () {return cy.get('.CrewMember-up')}},
    moveBackwardsBtn: {get: function () {return cy.contains('<')}},

    isCrewMemberInState: {value: function (state, name) {
        this.appColumns.eq(state).find(crewMembers).contains(name)
    }},

    open: {value: function () {
        Page.open.call(this, '/')
    }},
});

module.exports = CrewDashboardPage;