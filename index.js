import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import questionRoutes from "./routes/Questions.js";
import answerRoutes from "./routes/Answers.js";
import cors from "cors";
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.get("/", (req, res) => {
  res.send("This is saalah api");
});

app.use("/user", userRoutes);
app.use("/questions", questionRoutes);
app.use("/answer", answerRoutes);
const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb://127.0.0.1:27017/saalah";
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server running on the port ${PORT}`);
    })
  )
  .catch((err) => console.log(err.message));
