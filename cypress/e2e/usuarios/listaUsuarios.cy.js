import { faker } from "@faker-js/faker";

const baseUrl = "http://localhost:3000";


describe("Listagem de Usuarios", () => {

    it("Listar usuarios cadastrados no sistema", () => {
        cy.request({
            url: `${baseUrl}/usuarios`,
            method: "GET",
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property("quantidade");
            expect(response.body).to.have.property("usuarios");
            expect(response.body.usuarios).to.be.an("array");

            const quantidade = response.body.quantidade;
            const usuarios = response.body.usuarios;

            cy.log(`Quantidade de usuarios: ${quantidade}`);
            cy.log(`Usuarios: ${JSON.stringify(usuarios)}`);

            if (usuarios.length > 0) {
                const firstUser = usuarios[0];
                expect(firstUser).to.have.property("nome");
                expect(firstUser).to.have.property("email");
                expect(firstUser).to.have.property("password");
                expect(firstUser).to.have.property("administrador");
                expect(firstUser).to.have.property("_id");
            }

        });
    });
});
