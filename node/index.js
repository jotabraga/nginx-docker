import express from "express";

const app = express();
const port = 3000;

app.get("/", (_req, res) => {
  res.send("Teste");
});

app.listen(port, () => {
  console.info(`App running on ${port} port`);
});
