const { Router } = require("express");
const LiturgieController = require("../controllers/LiturgoeController");

const route = Router();

route.post("/add", LiturgieController.CreateLiturgie);
// route.get("/:id", LiturgieController.FetchOneHotel);
// route.get("/", LiturgieController.FetchAllHotel);

module.exports = route;