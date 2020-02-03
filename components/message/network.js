const express = require("express");
const response = require("../../network/response");
const router = express.Router();
const controller = require("./controller");

router.get("/", function(req, res) {
  controller
    .getMessages()
    .then(messageList => {
      response.success(req, res, messageList, 200);
    })
    .catch(e => {
      response.error(req, res, "Unexpected Error", 500, e);
    });

  /*   console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado"
  });
  response.success(req, res, "Lista de mensajes"); */
});

router.post("/", function(req, res) {
  // res.status(201).send({ error: "", body: "Creado Correctamente" });
  //   res.send("Mensaje añadido");

  controller
    .addMessage(req.body.user, req.body.message)
    .then(fullMessage => {
      response.success(req, res, fullMessage, 201);
    })
    .catch(e => {
      response.error(
        req,
        res,
        "Información invalida",
        400,
        "Error en el Controlador"
      );
    });

  // controller.addMessage(req.body.user, req.body.message);
});

router.patch("/:id", function(req, res) {
  console.log(req.params.id);
  controller
    .updateMessage(req.params.id, req.body.text)
    .then(data => {
      response.success(req, res, data, 200);
    })
    .catch(e => {
      response.error(req, res, "Error interno", 500, e);
    });
});

module.exports = router;
