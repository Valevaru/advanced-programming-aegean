require("dotenv").config();

const buildApp = require("./app");
const connectDB = require("./config/db");

async function start() {
  await connectDB(process.env.MONGODB_URI);

  const app = buildApp();
  const port = Number(process.env.PORT) || 5050;

  app.listen(port, () => {
    console.log(`✅ Server listening on http://localhost:${port}`);
  });
}

start();