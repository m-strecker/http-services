const express = require('express');
const app = express();
const cors = require('cors');

app.listen(3000, ()=>{
    console.log('The Server is On');
});



//Use required express middlewares for incoming requests
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));
app.use(cors());

//Create Get route that sends welcome message in response to incoming requests
app.get('/',(req,res)=>{
    res.send("Hello World");
});


//Create Employer ojbect array
const Data1 = [
    { id: 1, type: "book" },
    { id: 2, type: "pen" },
    { id: 3, type: "folders" },
    { id: 4, type: "staplers" },

];


//Create Get method to send data when visiting localhost:000
app.get('/products/getAll',(req, res)=>{
    res.send(Data1);
});

