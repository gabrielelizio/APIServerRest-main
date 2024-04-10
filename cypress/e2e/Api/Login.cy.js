describe("API - Teste Funcional de Login", () => {
  it("Deve realizar o login com sucesso", () => {
    cy.login().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.equal("Login realizado com sucesso");
    });
  });

  it("Deve realizar o login com senha incorreta", () => {
    cy.loginIncorreto().then((response) => {
      expect(response.status).to.equal(401);
      expect(response.body.message).to.equal("Email e/ou senha inválidos");
    });
  });
});
