const axios = require("axios");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await axios.post("https://apis.aligo.in/send/", null, {
      params: req.body,
    });

    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ error: err.toString() });
  }
}