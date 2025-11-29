import usuarios from "../../pages/usuarios/index.js";
import { faker } from "@faker-js/faker";

const nome = faker.person.fullName();
const email = faker.internet.email();
const senha = faker.internet.password();

describe("Cadastro de Novos Usuarios", () => {
    it("Deve cadastrar um novo usuario com sucesso", () => {
        usuarios.cadastrarUsuario(nome, email, senha);
    });


});
