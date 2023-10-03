import express, {response} from 'express'

const app = express();
import {MongoClient} from "mongodb";

app.use(express.json());
// app.post('/hello', (req,res) => {
//     console.log(req.body)
//     res.send('Hello');
// })
//
// app.get('/hello/:name' , (req,res) =>{
//     const { name } =req.params;
//     res.send(`this is a test ${name}`)
// })

app.post('/api/remove/:name', async (req,res) => {
    const {name} = req.params
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    await client.connect()
    const db = client.db('recipe-db')
    const article = await db.collection('articles').deleteOne(name)
    res.json(article)
})
app.get('/api/recipes/:name', async (req,res) => {
    const {name} = req.params
    const client = new MongoClient('mongodb://127.0.0.1:27017')
    await client.connect()
    const db = client.db('recipe-db')
    const article = await db.collection('articles').find({}).toArray()
    res.json(article)
})


app.listen(8000, () => {
    console.log('server is listening on port 8000')
})