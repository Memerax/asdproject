import express from 'express'

const app = express();

app.post('/hello', (req,res) => {
    console.log(req.body)
    res.send('Hello');
})

app.listen(8000, () => {
    console.log('server is listening on port 8000')
})