const reservationsRoutes = require("./routes/reservationsRouter");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());
app.use("/", reservationsRoutes);

const port = 5001;
app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
