import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Contribution from "./models/contribution.js";
import connectMongoDb from "./db/connectMongoDb.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


// POST - Create Contribution (Authenticated Users Only)
app.post("/api/contribute", async (req, res) => {
    try {
      const { title, content, codeSnippet } = req.body;
  
      const newPost = new Contribution({
        title,
        content,
        codeSnippet,
      });
  
      await newPost.save();
      res.status(201).json({ message: "Contribution added successfully!" });
    } catch (error) {
      console.error("POST /api/contribute Error:", error); // Log the actual error
      res.status(500).json({ error: error.message }); // Send error message in response
    }
  });
  
  app.get("/api/contributions", async (req, res) => {
    try {
      const contributions = await Contribution.find();
      res.status(200).json(contributions);
    } catch (error) {
      console.error("GET /api/contributions Error:", error); // Log the actual error
      res.status(500).json({ error: error.message });
    }
  });
  

// GET - Fetch All Contributions
app.get("/api/contributions", async (req, res) => {
  try {
    const contributions = await Contribution.find();
    res.status(200).json(contributions);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectMongoDb();
});
