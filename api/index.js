const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

// 10
const cors = require("cors");
app.use(cors());

const authRoutes = require("./routes/authRoute.js");
const userRoutes = require("./routes/userRoute.js");
const movieRoutes = require("./routes/movieRoute.js");
const listRoutes = require("./routes/listRoute.js");

mongoose.connect("mongodb://localhost:27017/netflixDB", {
     useNewUrlParser: true, 
     useUnifiedTopology: true
}).then(console.log("Connected to Database"))
.catch(error => console.log(error));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/lists", listRoutes);


app.listen(5000, () => {
    console.log("Server started");
})