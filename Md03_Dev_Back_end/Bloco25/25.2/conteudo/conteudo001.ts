type Birds = {
  name: string;
  especie: string;
  age: number;
}

type Sum = (num1: number, num2: number) => number;

type address = {
  street: string;
  number: number;
  city: string;
  state: string;
}

function printCPF(cpf: string | number){
  console.log(`Seu CPF é: ${cpf}`);
}

printCPF(11111111111);
// Saída:
// Seu CPF é: 11111111111

printCPF('111.111.111-11');
// Saída:
// Seu CPF é: 111.111.111-11

type StatesOfMatter = "liquid" | "solid" | "gaseous";
type IdentifyingDocument = string | number;
type SO = "linux" | "mac os" | "windows";
type Vowels = "a" | "e" | "i" | "o" | "u";