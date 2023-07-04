import express from "express";
import mysql from "mysql";

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
});

app.get("/", (_req, res) => {
  res.send("Teste");
});

app.listen(port, () => {
  console.info(`App running on ${port} port`);
});
