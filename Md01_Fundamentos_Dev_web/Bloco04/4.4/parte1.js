let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

let info2 = {
  personagem: "Tio Patinhas",
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: "Sim",
};

console.log("Bem vinda, ", info.personagem);

info["recorrente"] = "Sim";

console.log(info);

for (let chave in info) {
  console.log(chave);
}

for (let chave in info) {
  console.log(info[chave]);
}

for (let chave in info) {
  if (chave === "recorrente" && info[chave] === info2[chave]) {
    console.log("Ambos recorrentes // Atenção para essa última linha!");
  } else {
    console.log(info[chave] + " e " + info2[chave]);
  }
}
