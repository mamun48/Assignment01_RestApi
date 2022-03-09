const express = require('express');
const res = require('express/lib/response');

//creat a promoRouter
const promoRouter = express.Router();

promoRouter.get('/',(req,res) => {
    res.send('Will send all the promotions to you!');
})

promoRouter.post('/',(req,res) => {
    res.send(`Will add the promotion with name: ${req.body.name} and description: ${req.body.details}`)
})

promoRouter.put('/',(req,res) => {
    res.send('Updating promotion!')
})
promoRouter.delete('/',(req,res) => {
    res.send('Deleting all the promotions')
})

//PomoRouter with id
promoRouter.get('/:id',(req,res) => {
    res.send('Will send all the details of promotions id: '+ req.params.id);
})

promoRouter.put('/:id',(req,res) => {
    res.write('Updating the promotion: ' + req.params.id + '\n');
        res.end('Will update the promotion: ' + req.body.name +
            ' with details: ' + req.body.description);
})
promoRouter.delete('/:id',(req,res) => {
    res.send('Deleting promotion: ' + req.params.id);
})

//exporting the promoRouter
module.exports = promoRouter;