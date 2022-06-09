const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

function exibeStudent(objeto) {
  for (let chave in objeto) {
    console.log(`${chave}, Nivel: ${objeto[chave]}`);
  }
}

exibeStudent(student2);
