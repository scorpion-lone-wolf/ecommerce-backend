import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

/**
 * express.json() -> Parses the incoming JSON request and populates it into req.body
 * app.use() -> Registers the middleware to run on every incoming request.
 *              So when a request comes in, this middleware runs and populates JSON into req.body
 */
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Auth Service is running");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Auth Service started and listening on PORT - ${PORT}`)
})