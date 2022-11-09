const app = require('./app');
const conn = require('./models/connection');

const PORT = process.env.PORT || 3001;

app.listen(PORT, async () => {
  console.log(`RUN SERVER ${PORT}`);
  const [ result ] = await conn.execute('SELECT * FROM drivers');
  if (result) {
    console.log('conectado ao banco no container trybecar_db porta 33080');
  } else {
    console.log('falha no container trybecar_db porta 33080');
  }
});
