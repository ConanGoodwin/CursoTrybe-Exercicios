const numeros = require("./conteudo");

describe ("Requisito 01", () => {
  it("recebe [1, 2, 3] e retorna true", () => {
    expect(numeros([1,'2',3])).toEqual(true);
  });
});

// conteudo invertido no curso
// describe ("Requisito 02", () => {
//   it("recebe [1, 2, 3] e retorna true", () => {
//     expect(true).toEqual(numeros([1,'2',3]));
//   });
// });