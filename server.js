import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser"
//all routes
import appRoutes from "./routes/index.js"
// Load environment variables from.env file

dotenv.config()
const app = express()
app.use(
  cors({
    origin: "https://shiksha-frontend-one.vercel.app",
    credentials: true,
  })
)
const PORT = process.env.PORT || 4000
//middleware
app.use(cookieParser())

app.use(express.json())

//db connection
import connectDB from "./config/db.js"
connectDB()

//routes
app.use("/api", appRoutes)


app.get("/", (req, res) => {
  res.send("Serever is running")
})
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
