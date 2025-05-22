const express = require("express");
const app = express();
const axios = require("axios");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  const payload = req.body;

  try {
    const response = await axios.post("https://apis.aligo.in/send/", null, {
      params: payload
    });

    res.status(200).send(response.data);
  } catch (err) {
    res.status(500).send({ error: err.toString() });
  }
});

module.exports = app;