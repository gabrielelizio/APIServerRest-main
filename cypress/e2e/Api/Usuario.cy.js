import { faker } from "@faker-js/faker";
describe("API - Teste Funcional Cadastro de Usuario", () => {
  it("Deve realizar o cadastro de usuário com sucesso", () => {
    cy.usuarioCadastro().then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body.message).to.equal("Cadastro realizado com sucesso");
    });
  });

  it("Deve realizar o cadastro de usuário com Email já cadastrado", () => {
    cy.emailCadastrado().then((response) => {
      expect(response.status).to.equal(400);
      expect(response.body.message).to.equal("Este email já está sendo usado");
    });
  });

  it("Deve alterar usuarios já cadastrados", () => {
    cy.ListarUsuarios().then((response) => {
      expect(response.status).to.equal(200);
    });
  });
});

describe("API - Deletar Usuario", () => {
  beforeEach(() => {
    const dados = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: "teste",
      administrador: "true",
    };
    cy.generateTokenAsAdmin(dados);
  });
  it("Deve deletar usuarios já cadastrados", () => {
    cy.deletarUsuario().then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.eq("Registro excluído com sucesso");
    });
  });
});
describe("API - Alterar Usuario", () => {
  beforeEach(() => {
    const dados = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: "teste",
      administrador: "true",
    };
    cy.generateTokenAsAdmin(dados);
  });
  it("Deve deletar usuarios já cadastrados", () => {
    const dados = {
      nome: faker.person.fullName(),
      email: faker.internet.email(),
      password: "teste",
      administrador: "true",
    };
    cy.editarUsuario(dados).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.message).to.eq("Registro alterado com sucesso");
    });
  });
});
