const express=require('express');
const app=express(); // Create Express application
// Built-in middleware
// Converts incoming JSON request body into JavaScript object
// Required for POST and PUT requests
app.use(express.json);

// Middleware runs before route handlers
// req  -> Request Object, res  -> Response Object,next -> Passes control to next middleware/route

app.use((req,res,next)=>{
  console.log(`${req.method} ${req.url}`);
next();
});

//Fake Database
// Temporary in-memory data
// In real projects this comes from MySQL/MongoDB
let students = [
    { id: 1, name: "Anusha" },
    { id: 2, name: "Arjun" }
];

app.get('/', (req, res) => {// Send plain text response

    res.send("Welcome to Express");

});

app.get('/students', (req, res) => { // Send JSON data

    res.json(students);
});

// Dynamic Route Parameter GET /students/1 GET /students/2
app.get('/students/:id', (req, res) => {

    // Extract id from URL

    const id = parseInt(req.params.id); // Find matching student
    const student =
        students.find(s => s.id === id);

   if (!student) {

        return res.status(404) .json({message: "Student Not Found"});
       } // Send found student
    res.json(student);

});

app.post('/students', (req, res) => {  // Data comes from request body    
const newStudent = {

        // Generate ID
        id: students.length + 1,
        // Read JSON body
        name: req.body.name
    };

    // Add student to array

    students.push(newStudent);

    // 201 = Created

    res.status(201).json(newStudent);

});

app.put('/students/:id', (req, res) => {//update

    const id = parseInt(req.params.id);

    const student =
        students.find(
            s => s.id === id
        );

    // Student doesn't exist

    if (!student) {

        return res
            .status(404)
            .json({
                message: "Student Not Found"
            });
    }
// Update existing record
    student.name = req.body.name;
    // Send updated data
    res.json(student);
});

app.delete('/students/:id', (req, res) => {

    const id = parseInt(req.params.id);

    // Remove matching student

    students = students.filter(
        s => s.id !== id
    );

    res.json({
        message: "Deleted Successfully"
    });

});

app.listen(3000, () => {

    console.log(
        "Server running on port 3000"
    );

});