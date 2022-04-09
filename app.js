import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import Pages from './routes/page.js'
import Blogs from './routes/blogs.js'
import Search from './routes/search.js'
import cors from 'cors'
import bodyParser from 'body-parser'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 9000

const db_string = process.env.MONGO_URI
const db_options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(db_string, db_options, () => {
    console.log("Database is connected")
})

app.get('/', (req, res) => {
  res.send('Home')
})
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit:50000 }))
app.use(express.json({limit: '50mb'}))

app.use(cors())
app.use('/page', Pages)
app.use('/blogs', Blogs)
app.use('/search', Search)

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next()
})

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})