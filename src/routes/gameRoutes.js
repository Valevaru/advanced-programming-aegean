const authMiddleware = require("../middleware/authMiddleware");
const express = require("express");
const {
  getAllGames,
  createGame,
  getGameById,
  updateGame,
  deleteGame
} = require("../controllers/gameController");

const router = express.Router();

// GET all games
router.get("/", getAllGames);

// POST new game
router.post("/", createGame);

// GET game by id
router.get("/:id", getGameById);

// PATCH update game
router.patch("/:id", updateGame);

// DELETE game
router.delete("/:id", deleteGame);

module.exports = router;
router.get("/protected/test", authMiddleware, (req, res) => {
  res.json({
    message: "Access granted to protected route",
    user: req.user
  });
});