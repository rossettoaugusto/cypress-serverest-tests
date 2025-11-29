import { faker } from "@faker-js/faker";
import usuarios from "../../pages/usuarios/index.js";


describe("Busca de Usuario por ID", () => {

    before(() => {
        if (!Cypress.env('usuarioId')) {
            const nome = faker.person.fullName();
            const email = faker.internet.email();
            const senha = faker.internet.password();
            usuarios.cadastrarUsuario(nome, email, senha);
        }
    });

    it("Buscar usuario cadastrado no sistema por ID", () => {
        const userId = Cypress.env('usuarioId');
        expect(userId, 'usuarioId definido').to.exist;
        usuarios.buscarUsuarioPorId(userId);
    });

});