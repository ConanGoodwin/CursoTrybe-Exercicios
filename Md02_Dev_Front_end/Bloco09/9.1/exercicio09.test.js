// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio08");

describe("A função getPokemonDetails", () => {
  const filtro1 = ({ name }) => name === 'Bulbasau';
  const filtro2 = ({ name }) => name === 'Bulbasaur';

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const esperado = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

    function callback(er, result) {
      try {
        expect(result).toBe(esperado);
        done();
      } catch (err) {
        done(err);
      }
    }

    getPokemonDetails(filtro2, callback)
  });

  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const erro = new Error('Não temos esse pokémon para você :(');

    function callback(er, result) {
      try {
        expect(er).toEqual(erro);
        done();
      } catch (err) {
        done(err);
      }
    }

    getPokemonDetails(filtro1, callback)
  });

});