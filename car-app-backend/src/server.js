const app = require("./app");
const dotenv = require('dotenv')

dotenv.config({path: "src/.env"})

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
