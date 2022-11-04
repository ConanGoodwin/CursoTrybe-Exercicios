const conn = require('./connection');

const insert = (person) => conn.execute(
  'INSERT INTO people (first_name,last_name,email,phone) VALUES (?,?,?,?)',
  [person.firstName, person.lastName, person.email, person.phone]
);

const select = () => conn.execute(
  'SELECT * FROM people'
);

module.exports = {
  insert,
  select
}