import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { exec } from "child_process";
import fs from "fs";
import bodyParser from "body-parser";
import Contribution from "./models/contribution.js";
import connectMongoDb from "./db/connectMongoDb.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(bodyParser.json());
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

app.post("/execute", (req, res) => {
  const { code } = req.body;
  if (!code) {
      return res.status(400).json({ error: "No assembly code provided." });
  }

  try {
      const output = executeAssembly(code);
      res.json({ output });
  } catch (error) {
      res.status(500).json({ error: "Execution Error", details: error.message });
  }
});

const executeAssembly = (code) => {
  const registers = { eax: 0, ebx: 0, ecx: 0, edx: 0 }; // Simulated registers
  const lines = code.split("\n").map(line => line.trim()).filter(line => line);

  let output = "";
  
  for (let line of lines) {
      const tokens = line.match(/"[^"]*"|\S+/g); // Match words and quoted strings
      if (!tokens) continue;

      const command = tokens[0];

      switch (command) {
          case "mov":
              registers[tokens[1]] = parseInt(tokens[2]);
              break;
          case "add":
              registers[tokens[1]] += registers[tokens[2]];
              break;
          case "sub":
              registers[tokens[1]] -= registers[tokens[2]];
              break;
          case "mul":
              registers[tokens[1]] *= registers[tokens[2]];
              break;
          case "div":
              registers[tokens[1]] = Math.floor(registers[tokens[1]] / registers[tokens[2]]);
              break;
          case "xor":
              registers[tokens[1]] ^= registers[tokens[2]];
              break;
          case "and":
              registers[tokens[1]] &= registers[tokens[2]];
              break;
          case "or":
              registers[tokens[1]] |= registers[tokens[2]];
              break;
          case "print":
              if (tokens[1].startsWith('"')) {
                  output += tokens[1].replace(/"/g, "") + "\n"; // Remove quotes from string
              } else {
                  output += `${tokens[1]} = ${registers[tokens[1]]}\n`;
              }
              break;
          default:
              throw new Error(`Unknown instruction: ${command}`);
      }
  }
  
  return output || "No output generated.";
};

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
    connectMongoDb();
});
