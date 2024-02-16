import express from "express";
import { PORT, mongoDB_URL } from "./config.js";
import { Book } from "./models/bookModel.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoutes.js";
import cors from "cors";
const app = express();

//middleware for parse the data to the body
app.use(express.json());

//middle ware for cors policy
//option 1 default it allows all cors(*)
// app.use(cors());
//option 2 middleware for allow custom orgins
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GEt", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
  })
);

app.get("/", (req, res) => {
  console.log(req);
  return res.status(231).send("welcome to Book store MERN app");
});

//routes
app.use("/books", bookRoute);

//databese connect using mongoose
mongoose
  .connect(mongoDB_URL)
  .then(() => {
    console.log("Database is connected");
    //server
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
