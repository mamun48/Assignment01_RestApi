/*
 * Title : Route
 * Description : Leaders route
 * Author : Mamun Hasan
 * Date : 07 March 2022
 */

const express = require('express');

const leader = express.Router();

leader.get('/',(req,res)=>{
    res.send('Will send all the leaders to you!');
})

leader.post('/',(req,res)=>{
    res.send('Will add the leader: ' + req.body.name + 'with details' + req.body.details);
})

leader.put('/',(req,res)=>{
    res.send('Some information of the leaders updated');
})
leader.delete('/',(req,res)=>{
    res.send('Deleted all the leaders');
})
//Leader route with id

leader.get('/:id',(req,res)=>{
    res.send('Will send the details of the leader id: ' + req.params.id)
})

leader.post('/:id',(req,res)=>{
    res.send(`A leader with id: ${req.params.id} added`);
})

leader.put('/:id',(req,res)=>{
    res.send(`Upadating the information of the leader with id: ${req.params.id}`)
})

leader.delete('/:id',(req,res)=>{
    res.send(`Deleting leader with id: ${req.params}`)
})
module.exports = leader;