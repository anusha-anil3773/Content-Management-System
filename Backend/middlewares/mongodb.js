const mongoose = require("mongoose");

mongoose.connect( "mongodb+srv://Anusha37:anusha123@cluster0.bd302zx.mongodb.net/contentmanagementsystem?retryWrites=true&w=majority", {
  useNewUrlParser: true,
});
mongoose.connection.on("connected", () => {
  console.log("connected");
 
});