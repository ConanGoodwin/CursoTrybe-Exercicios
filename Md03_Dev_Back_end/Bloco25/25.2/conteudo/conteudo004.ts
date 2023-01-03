type Address = {
  street: string,
  number: number | null,
}

type User = {
  name: string;
  email: string;
  password: string;
}

function stringToJson(str: string): unknown {
  const result = JSON.parse(str);

  return result;
}

const user = stringToJson('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}') as User;
const address = <Address>stringToJson('{"street":"Rua Tamarindo","number":1}');

user.name;
address.street;

const str: unknown = 'texto';
str.spit('');
(str as string).split('');

const num: string = '2';

num as number;
<unknown>num as number;

function otherStringToJson<T, U>(str: string, id: U): T & { id: U } {
  const result = JSON.parse(str);
  result.id = id;

  return result;
}

const user2 = otherStringToJson<User, number>('{"name":"André Soares","email":"andre@trybe.com","password":"senha_secreta"}', Date.now())
const address2 = otherStringToJson<Address, string>('{"street":"Rua Tamarindo","number":1}', '#01');

user2.email;
address2.number;
user2.password;
user2.id;
address2.id;

function identity<T, U>(value: T, message: U): T {
  console.log(message);

  return value;
}

const returnNumber = identity<number, string>(100,"Olá");
const returnString = identity<string, string>('100',"Mundo!");
const returnBoolean = identity<boolean, string>(true,'Olá, Mundo!');

function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

const numberArray = getArray<number>([5,10,20]);
numberArray.push(25);
numberArray.push('this is not a number');

const stringArray = getArray<string>(['Cats','Dogs','Birds']);
stringArray.push('Mouse');
stringArray.push(30);