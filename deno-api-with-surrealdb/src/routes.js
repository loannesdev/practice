import { Router } from "oak";
import { deleteVideoGame, getVideoGames, postVideoGame, putVideoGames } from "./controller.js";

const router = new Router()

export default router
  .get("/", getVideoGames)
  .post("/", postVideoGame)
  .put("/", putVideoGames)
  .delete("/:id", deleteVideoGame)
