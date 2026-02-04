const express = require("express");
const gameRoutes = require("./routes/gameRoutes");
const authRoutes = require("./routes/authRoutes");

function buildApp() {
  const app = express();
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ ok: true, message: "API is running ✅" });
  });

  app.use("/api/v1/games", gameRoutes);
  app.use("/api/v1/auth", authRoutes);

  return app;
}

module.exports = buildApp;