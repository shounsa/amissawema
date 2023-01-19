const { Router } = require("express");
const LiturgieController = require("../controllers/LiturgoeController");

const route = Router();

route.post("/add", LiturgieController.CreateLiturgie);
route.get("/:date", LiturgieController.GetLiturgie);

module.exports = route;