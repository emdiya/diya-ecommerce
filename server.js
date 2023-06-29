require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
require("./app/router/test.route")(app);

const db = require("./app/model/index");
db.sequelize.sync()
    .then(() => {
        console.log("Synced db.");
    })
    .catch((err) => {
        console.log("Failed to sync db: " + err.message);
    });

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.get("/api", (req, res) => {
    res.json({
        success: 1,
        message: "Welcome To Diya E-Commerce"
    });
});

// const PORT = process.env.PORT || 8080;
app.listen(process.env.APP_PORT, () => {
    console.log(`Server is running on port : `,process.env.APP_PORT);
});