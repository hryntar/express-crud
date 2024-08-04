import express from "express";
import mongoose from "mongoose";
import router from "./router.js";

const PORT = 5000;
const DB_URL = "mongodb+srv://user:user@cluster0.mxthlmz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json());
app.use("/api", router);

async function startApp() {
   try {
      await mongoose.connect(DB_URL);
      app.listen(PORT, () => {
         console.log("SERVER STARTED ON PORT " + PORT);
      });
   } catch (error) {
      console.log("SERVER ERROR: ", error);
   }
}

startApp();
