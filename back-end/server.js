require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/DB/db");
const port = process.env.PORT || 5000

// db connection 
connectDB()

app.listen(port, () => {
    console.log("server started at http://localhost:5000")
})  