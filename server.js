const express = require("express");
const bodyParser = require("body-parser");
const router = require("./network/routes");
// const router = require("./components/message/network");

var app = express();
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extends: false }));

// app.use(router);
router(app);

// router.delete("/message", function(req, res) {
//   console.log(req.body);
//   console.log(req.query);
//   res.send("Mensaje " + req.body.value + "Eliminado");
//   res.status(201).send({ error: "", body: "Creado Correctamente" });
// });

// app.use("/", function(req, res) {
//   res.send("Hola");
// });
app.use("/app", express.static("public"));
app.listen(3000);
console.log("La aplicación esta escuchando en localhost:3000");
