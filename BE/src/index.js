const app = require("./app");
const configDatabase = require("./config/database");
require("./config/database");
require("dotenv").config();
const { PORT } = require("./config.js");
configDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
console.log("Server on port", PORT);
