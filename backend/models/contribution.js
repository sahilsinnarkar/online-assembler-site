import mongoose from "mongoose";

const ContributionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  codeSnippet: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Contribution", ContributionSchema);
