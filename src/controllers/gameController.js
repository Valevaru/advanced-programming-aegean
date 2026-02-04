const Game = require("../models/Game");

// GET /api/v1/games
async function getAllGames(req, res) {
  try {
    const games = await Game.find();
    res.json({ count: games.length, data: games });
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch games" });
  }
}

// POST /api/v1/games
async function createGame(req, res) {
  try {
    const game = await Game.create(req.body);
    res.status(201).json({
      message: "Game created successfully",
      data: game
    });
  } catch (err) {
    res.status(400).json({ error: "Invalid game data" });
  }
}

// GET /api/v1/games/:id
async function getGameById(req, res) {
  try {
    const game = await Game.findById(req.params.id);

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    res.json({ data: game });
  } catch (err) {
    res.status(400).json({ error: "Invalid game id" });
  }
}

// PATCH /api/v1/games/:id
async function updateGame(req, res) {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    res.json({
      message: "Game updated successfully",
      data: game
    });
  } catch (err) {
    res.status(400).json({ error: "Invalid update data" });
  }
}

// DELETE /api/v1/games/:id
async function deleteGame(req, res) {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);

    if (!game) {
      return res.status(404).json({ error: "Game not found" });
    }

    res.json({ message: "Game deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: "Invalid game id" });
  }
}

module.exports = {
  getAllGames,
  createGame,
  getGameById,
  updateGame,
  deleteGame
};