import express from "express";
import statusCode from "./statusCodes";

const app = express();

app.use(express.json());
const PORT = 8000;

app.get('/', (_req,res) => {
  res.status(statusCode.OK).send('Express + TypeScript');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});