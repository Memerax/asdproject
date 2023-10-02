import express from 'express'

const app = express();
app.use(express.json());
app.post('/hello', (req,res) => {
    console.log(req.body)
    res.send('Hello');
})

app.get('/hello/:name' , (req,res) =>{
    const { name } =req.params;
    res.send(`this is a test ${name}`)
})

app.listen(8000, () => {
    console.log('server is listening on port 8000')
})