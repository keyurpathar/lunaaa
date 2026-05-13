require("dotenv").config();
const app = require("./app");
const connectDB = require("./DB/db");
const port = process.env.PORT || 5000

// db connection 
connectDB()

app.listen(port, () => {
    console.log("server started at http://localhost:5000")
})  