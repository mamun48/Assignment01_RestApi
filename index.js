/*
 * Title : Assignment
 * Description : Simple node api creat 
 * Author : Mamun Hasan
 * Date : 07 March 2022
 */
//External dependencies
const express = require('express');

const dishRouter = require('./Routes/dishesRoute');
const leadersRoute = require('./Routes/leadersRoute');
const promoRouter = require('./Routes/promoRoute');

//creat app
const app = express();

//adding dishesRouter in this app
app.use('/dishes',dishRouter);
app.use('/leaders',leadersRoute);
app.use('/promos',promoRouter);

app.all('/',(req,res) => {
    res.status(404).send('This url is not valid');
})


app.listen(3000,() => {
    console.log('Listening on port 3000....');
})
