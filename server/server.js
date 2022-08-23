const express = require("express");
const app = express();
const port = 3000;
const db = require("./db");
const compression = require("compression");

app.use(compression());
app.use(express.json());

app.get("/", (req, res) => {
    db.getTalks(req.body.name)
        .then(({ rows }) => {
            console.log("talks rows: ", rows);
            res.json({ rows });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
