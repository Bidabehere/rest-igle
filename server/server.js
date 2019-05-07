require('./sonfig/config');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


app.post('/usuario', function (req, res) {
    
let body = req.body;

if( body.nombre === undefined){
   
    res.status(400).json({
ok: false,
mensaje: "El nombre es necesario",

})

}  else {
res.json({
    body
    }); 


} 

    
})
 
app.get('/', function (req, res) {
    res.json('Hello World')
    
})
app.listen(process.env.PORT, ()=>{
    
    console.log('Escuchando en el puerto',process.env.PORT);}
    );