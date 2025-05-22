import axios from "axios";

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ error: "Method not allowed" });
    }

    const body = req.body;

    if (!body || typeof body !== "object") {
      return res.status(400).json({ error: "Invalid request body" });
    }

    const response = await axios.post("https://apis.aligo.in/send/", null, {
      params: body,
    });

    return res.status(200).json(response.data);
  } catch (err) {
    return res.status(500).json({ error: err.toString() });
  }
}