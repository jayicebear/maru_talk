require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/chat", async (req, res) => {
  const userMessage = req.body.message;
  const fullMessage = `
  당신은 귀여운 강아지 입니다 
  강아지 어투로 답변해 주세요
  사용자 질문: ${userMessage}
  `;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4o-mini",
        messages: [{ role: "user", content: fullMessage }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "API request failed" });
  }
});

app.listen(3001, () => console.log("Server running on port 3001"));
