// Definição da função userFullName
const userFullName = ({ firstName, lastName }) => console.log(`Hello! My name is ${firstName} ${lastName}`);
const userNationality = ({ firstName, nationality }) => console.log(`${firstName} is ${nationality}`);
const delay = (maxMilliseconds = 5000) => Math.floor(Math.random() * maxMilliseconds);

// Definição da função getUser
const getUser = (callback) => {
  setTimeout(() => {
    const user = {
      firstName: "Ivan",
      lastName: "Ivanovich",
      nationality: "Russian",
    };
    // Retorne a `callback` passada como parâmetro na função `getUser`
    // Dica: você pode manter o `console.log()`
    // console.log(user);
    return callback(user);
  }, delay());
  // Retornamos nosso parâmetro, que será uma função (callback)
};

// Chamada/execução da função getUser, que vai receber como parâmetro nossa função userFullName.
getUser(userFullName);
getUser(userNationality);