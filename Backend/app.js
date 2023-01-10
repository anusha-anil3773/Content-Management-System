const express = require("express");
const app = express();
const cors = require("cors");

const user = require("./routes/user");
const admin = require("./routes/admin")
const superadmin = require("./routes/superadmin")

require("./middlewares/mongodb") 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// app.use("/superadmin", Manageadmin);
app.use("/user", user);
app.use("/admin",admin)
app.use("/superadmin",superadmin)

// Server
app.listen(3000, () => {
    console.log("Server starts at :3000");
  });