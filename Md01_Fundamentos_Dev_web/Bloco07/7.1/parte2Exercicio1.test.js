const fatorial = require("./parte2Exercicio1");

describe("Testes da função fatorial", () => {
  test("fatora 4 espera 24", () => {
    expect(fatorial(4, 4)).toBe(24);
  });

  test("fatora 5 espera 120", () => {
    expect(fatorial(5, 5)).toBe(120);
  });
});
