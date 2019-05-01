function Page () {}

Page.prototype.open = function (path) {
    cy.visit(path)
};

module.exports = new Page();
