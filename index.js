const express = require("express");
const app = express();
const homepageRouter = require("./routers/homepage");
const authRouter = require("./routers/auth");
const loggerMiddleWare = require("morgan");
const bodyParserMiddleWare = express.json();
const corsMiddleWare = require("cors");
const { PORT } = require("./config/constants");

app.use(loggerMiddleWare("dev"));

app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());
// delay middleware
if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use("/homepages", homepageRouter);

app.use("/", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
