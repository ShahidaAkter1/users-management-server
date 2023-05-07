//step -1
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json());

//hard coded data
const users=[
    {id:1 , name:'Shahida' , email: 'shahida@gmail.com'},
    {id:1 , name:'Suad' , email: 'suad@gmail.com'},
    {id:1 , name:'Tuamoni' , email: 'tuamoni@gmail.com'},
]

//step-2
app.get('/', (req,res) => {
    res.send('Users Management server is running')
})

//hard coded data running 
app.get('/users', (req,res) => {
    res.send(users);
})

app.post('/users', (req, res) =>{
    console.log('post api hitting')
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.send(newUser);
})

//step-3
app.listen(port, () =>{
    console.log(`Server is running on PORT: ${port}`);
})