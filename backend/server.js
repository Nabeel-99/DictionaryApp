import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dictionary from "./model/dictionary.js"

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('database connected')
    app.listen(process.env.PORT, () => {
        console.log(`server running on ${process.env.PORT}`)
        
    })
}).catch(err => {
    console.log(`error connecting to db: ${err}`)
})


// get all words
app.get("/words", async(req, res) => {
    try {
       const allInfo = await dictionary.find({})  // find everything in the database
       return res.status(200).json(allInfo)
    } catch (error) {
        return res.status(400).json(error)
    }
})

app.get("/word/:title", async (req, res) => {
    try {
        const {title} = req.params
        const foundWordInfo = await dictionary.findOne({title: title})
        return res.status(200).json(foundWordInfo)
    } catch (error) {
        console.log(error)
        return res.status(404).json(error)
    }
})