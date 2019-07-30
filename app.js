const express = require("express");
const app = express();

app.get(`/`, (req, res) => {
	res.json(true);
});

app.get(`/test`, (req, res) => {
	res.json({test: false});
});

app.listen(process.env.PORT | 80)