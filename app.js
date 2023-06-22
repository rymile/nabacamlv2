const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
const routes = require("./routes");
const connect = require("./schemas");

connect();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", routes);

app.listen(port, () => {
  console.log(port, "서버가 실행되었습니다.");
});
