import usuarios from "../../pages/usuarios/index.js";

describe("Listagem de Usuarios", () => {
  it("Listar usuarios cadastrados no sistema", () => {
    usuarios.listarUsuarios();
  });
});
