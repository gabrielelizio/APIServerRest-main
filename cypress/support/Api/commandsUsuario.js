import { faker } from "@faker-js/faker/locale/pt_BR";
const dados = {
  nome: faker.person.fullName(),
  email: faker.internet.email(),
  password: "teste",
  administrador: "true",
};
Cypress.Commands.add("generateTokenAsAdmin", (jsonobject) => {
  cy.api({
    method: "POST",
    url: "/usuarios",
    body: jsonobject,
  }).then((response) => {
    expect(response.status).to.equal(201);
    expect(response.body.message).to.equal("Cadastro realizado com sucesso");
    localStorage.setItem("usuario_id", response.body._id);
    expect(localStorage.getItem("usuario_id")).not.null;
    cy.log(localStorage.getItem("usuario_id"));
  });
});

Cypress.Commands.add("usuarioCadastro", () => {
  cy.api({
    method: "POST",
    url: "/usuarios",
    body: dados,
  });
});

Cypress.Commands.add("emailCadastrado", () => {
  cy.api({
    method: "POST",
    url: "/usuarios",
    body: dados,
    failOnStatusCode: false,
  });
});
Cypress.Commands.add("ListarUsuarios", () => {
  cy.api({
    method: "GET",
    url: "/usuarios",
  });
});

Cypress.Commands.add("deletarUsuario", () => {
  cy.api({
    method: "DELETE",
    url: "/usuarios/" + localStorage.getItem("usuario_id"),
  });
});

Cypress.Commands.add("editarUsuario", (jsonobject) => {
  cy.api({
    method: "PUT",
    url: "/usuarios/" + localStorage.getItem("usuario_id"),
    body: jsonobject,
  });
});
