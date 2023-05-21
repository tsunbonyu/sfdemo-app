const getOrders = require('./get-orders');
const getOrder = require('./get-order');
const createOrder = require('./create-order');
const updateOrder = require('./update-order');
const deleteOrder = require('./delete-order');

module.exports = {
    paths:{
        '/orders':{
            ...getOrders,
            ...createOrder
        },
        '/orders/{id}':{
            ...getOrder,
            ...updateOrder,
            ...deleteOrder
        }
    }
}