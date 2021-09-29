const bootstrap = require("../bootstrap");
const { express } = bootstrap;
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../../client/index.html"));
});

module.exports = router;
