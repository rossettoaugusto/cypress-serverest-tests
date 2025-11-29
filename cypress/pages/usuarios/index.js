const baseUrl = Cypress.config('baseUrl') || 'http://localhost:3000';
const administrador = "true";

class Usuarios {
  cadastrarUsuario(nome, email, senha) {
    cy.request({
      url: `${baseUrl}/usuarios`,
      method: "POST",
      body: {
        nome,
        email,
        password: senha,
        administrador,
      },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body).to.have.property(
        "message",
        "Cadastro realizado com sucesso"
      );
      expect(response.body).to.have.property("_id");
      Cypress.env("usuarioId", response.body._id);
    });
  }

  buscarUsuarioPorId(id) {
    const userId = id || Cypress.env("usuarioId");
    expect(userId, 'usuarioId definido').to.exist;

    cy.request({
      url: `${baseUrl}/usuarios/${userId}`,
      method: "GET",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("nome");
      expect(response.body).to.have.property("email");
      expect(response.body).to.have.property("password");
      expect(response.body).to.have.property("administrador");
      expect(response.body).to.have.property("_id");
    });
  }
  
  listarUsuarios() {
    cy.request({
      url: `${baseUrl}/usuarios`,
      method: "GET",
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("quantidade");
      expect(response.body).to.have.property("usuarios");
      expect(response.body.usuarios).to.be.an("array");
    });
  }

}

export default new Usuarios();
