const express = require("express");
const cors = require("cors");
const forumRoutes = require("./routes/forumRoutes.js");
const pollingRoutes = require("./routes/pollingRoutes.js");

require("dotenv").config();
const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(
    `Incoming request: ${req.path}, Host: ${req.hostname} / IP: ${req.ip}`
  );
  next();
});

app.use("/polling", pollingRoutes);
app.use("/forum", forumRoutes);

app.listen(PORT, () => {
  console.log(`👽👽👽  App listening on port: ${PORT}  👽👽👽`);
});
