import express from 'express'
import {} from 'dotenv/config'
import routes from './routes/routes.js'
import connectDB from './db/connect.js'
import bodyParser from 'body-parser'
import path from 'path'

const app = express()

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended:false}))
app.use(bodyParser.json())
app.use('/', routes)

app.get('*', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})

app.get('/add', (req, res)=> res.render('add', {title: 'Add Employee'}))
app.use((req, res)=> res.status(404).render('404', {title: 'Page Not Found'}))

const PORT = process.env.PORT || 5000

const init = async() => {
    try {
        await connectDB(process.env.DB)
        console.log("connected to database")
        app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
    } catch (error) {
       console.log(error) 
    }
}

init()