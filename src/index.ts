import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts'

const app = express()

// @ts-ignore
app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

const CONNECTION_URL = "mongodb+srv://pointmekin:pointmekin9953@cluster0.li4tz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000
// @ts-ignore
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true
 })
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  })
  .catch((err) => {
    console.log(err.message)
  })
// @ts-ignore
mongoose.set('useFindAndModify', false);

