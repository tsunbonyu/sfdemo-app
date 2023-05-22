const express = require("express");
const {nanoid} = require('nanoid');
const router = express.Router();

const idLength = 8;

router.get('/', (req,res) => {

    let orders = req.app.db.get('orders').value();

    return res.send(orders);

});

router.get('/:id', (req,res) => {

    let order = req.app.db.get('orders').find({ 
        id: req.params.id
    }).value();

    if(!order){

        res.status(404);

        return res.send({
            message: "Order cannot be found",
            internal_code: "Invalid id"
        });

    };

    return res.send(order);

});

router.post('/', (req,res) => {

    let order = {
        id:nanoid(idLength),
        ...req.body
    };

    try {

        req.app.db.get("orders").push(order).write();
        
        return res.status(201).send(`Order ${order.id} send to MBE successfully`);

    }catch(error){

        return res.status(500).send(error);
    }
});

router.put('/:id', (req,res) => {

    //find order.
    let order = req.app.db.get("orders").find({
        id: req.params.id
    }).value();

    if(!order){

        return res.sendStatus(404);

    };

    //update that order.
    try {

        req.app.db.get("orders").find({
            id:req.params.id
        })
        .assign({ completed: !order['completed'] })
        .write();

        return res.send("Order updated");

    } catch(error) {

        res.sendStatus(500);

        return res.send(error);

    };

});

router.delete('/:id', (req,res) => {

    //find order.
    let order = req.app.db.get("orders").find({
        id:req.params.id
    }).value();

    if(!order){

        return res.sendStatus(404);

    };

    // delete the order.
    try {
        req.app.db.get("orders").remove({
            id:req.params.id
        })
        .write();

        return res.send("order deleted");

    } catch(error) {

        return res.sendStatus(500);

    }

});

module.exports = router;