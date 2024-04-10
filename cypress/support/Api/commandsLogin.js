Cypress.Commands.add("login", () => {
  cy.api({
    method: "POST",
    url: "/Login",
    body: {
      email: "fulano@qa.com",
      password: "teste",
    },
  });
});

Cypress.Commands.add("loginIncorreto", () => {
  cy.api({
    method: "POST",
    url: "/Login",
    body: {
      email: "fulano@qa.com",
      password: "SenhaIncorreta",
    },
    failOnStatusCode: false,
  });
});
