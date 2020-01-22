const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extends: false }));
app.use(router);

router.get("/message", function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado"
  });
  res.send("Lista de mensajes");
});

router.post("/message", function(req, res) {
  res.send("Mensaje añadido");
});

router.delete("/message", function(req, res) {
  console.log(req.body);
  console.log(req.query);
  res.send("Mensaje " + req.body.value + "Eliminado");
});

// app.use("/", function(req, res) {
//   res.send("Hola");
// });

app.listen(3000);
console.log("La aplicación esta escuchando en localhost:3000");
