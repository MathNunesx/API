import express, { response } from 'express'

const app = express()
app.use(express.json())

const users = []

app.post('/user', (req, res) => {

    users.push(req.body)

    res.send('Ok')
})

app.get('/user', (req, res) => {
    res.json(users)
})

app.listen(3000)

