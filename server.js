const express = require("express");
const fs = require("fs");

//Initates the express app
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/assets", express.static("./assets"));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

//Runs the code effectively to the server
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
