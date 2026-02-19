import express from "express";

// instance creation
const app = express();

// middlewares 
app.use(express.json());

// mock database
let users = [
    { id:1 , name: "Suman", course:"Backend"},
    { id:2 , name: "Sourav", course:"Frontend"},
]

// routes

// GET method: getting all the users
app.get('/api/users', (req,res) => {
    res.json(users);
})

// GET method: get user by id
app.get('/api/users/:id', (req,res) => {
    const id = parseInt(req.params.id); 
    const user = users.find((u) => u.id === id);

    if(!user) {
        return res.status(404).json({ error:"User not found" });
    }
    res.json(user);
})

// POST method
app.post('/api/users',(req,res) =>{
    const body = req.body;

    if(!body.name || !body.course){
        return res.status(400).json({error:"Name and course are required"})
    }

    const NewUser = {
        id: users.length + 1, // auto increment
        name: body.name,
        course: body.course
    }

    users.push(NewUser);
    res.status(201).json({message:"User created successfully"});
})

// DELETE method: delete using id
app.delete('/api/users/:id',(req,res) =>{
    const id = parseInt(req.params.id);
    const index = users.findIndex((u) => u.id === id);  

    if(index == -1) {
        return res.status(404).json({error:"User not found"});
    }

    users.splice(index, 1);    // array.splice(start, deleteCount)
    res.json({message:'User deleted successfully'});
})

// server running
const PORT = 4000;
app.listen(PORT,() => {
    console.log(`Our first Express.js server is ready and running ... on port ${PORT}`);
});