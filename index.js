const express = require("express")
const projectRouter = require("./routers/projectRouter")
const server = express();

server.use(express.json());
server.use("/api", projectRouter)
server.get("/", (req, res) => {
    res.status(200).json({status: "Online", message: "Welcome"})
})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})