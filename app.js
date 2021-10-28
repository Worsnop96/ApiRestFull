const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const usuarios = require("./routes/usuarios");
mongoose
  .connect("mongodb://localhost:27017/demo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("conectado a mongoDB"))
  .catch((err) => console.log(`surgio el siguiente error ${err}`));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/usuarios", usuarios);

app.listen(port, () => {
  console.log("api restfull ok");
});
