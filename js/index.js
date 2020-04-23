const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const personModel = require("./person");

if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}

var port = process.env.PORT || 3000;
var mongo_url = process.env.MONGO_URI;

mongoose.connect(mongo_url, {
    useNewUrlParser: true,
});

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

const router = express.Router();

router.get("/people", async (req, res) => {
    const people = await personModel.find({});

    try {
        res.send(people);
    } catch (err) {
        res.status(500).send(err);
    }
});

router.post("/people", async (req, res) => {
    const person = new personModel(req.body);

    try {
        await person.save();
        res.send(person);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.use("/api", router);

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
