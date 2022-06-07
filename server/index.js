const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const routerAnimal=require('./routes/animalesRouter');
const routerPersona=require('./routes/personasRouter');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('Hola mi server en express');
});
app.use('/api/animales',routerAnimal);
app.use('/api/personas',routerPersona);
app.listen(port, () => {
    console.log('Mi port: '+port);
});