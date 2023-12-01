const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const history = require("connect-history-api-fallback");
const cors = require("cors");

const connectMongodb = require("./connect-database");

module.exports = (host, port) => {
  // Routes
  const todo = require("./routes/todos");

  // Create express instance
  const app = express();
  const router = new express.Router();

  // Router config
  router.use(
    bodyParser.urlencoded({ extended: true }), // Parse application/x-www-form-urlencoded
    bodyParser.json() // Parse application/json
  );

  // Require Todo routes
  app.use(todo);

  // app.use((req, res, next) => {
  //   res.setHeader("Access-Control-Allow-Origin", "*");
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept"
  //   );
  //   next();
  // });

  // Use CORS
  // const corsOptions = {
  //   origin: "*",
  // };

  // app.use(cors(corsOptions));

  connectMongodb();

  // History fallback api
  router.use(history());
  // TODO: Ezt itt nyugodtan modositsd, csak a feladat kiirasa miatt mutat a gyoker konyvtarra!
  // Kliens kod bundle betoltese, ha van
  router.use("/", express.static(path.join(__dirname, "../../client/dist"))); // History fallback utan kell megadni

  return app.listen(port, host, () => {
    console.info(`IdomSoft test web server started on ${host}:${port}`);
  });
};
