const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};


test('se transforma em maiscula', (done) => {
  uppercase('conan', (str) => {
    try {
      expect(str).toBe('CONAN');
      done();
    } catch (error) {
      done(error);
    }
  });
});