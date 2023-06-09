module.exports = {
    delete:{
        tags: ['Order CRUD operations'],
        description: "Deleting an order",
        operationId: "deleteOrder",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "Deleting an order"
            }
        ],
        responses:{
            '200':{
                description:"Order deleted successfully"
            },
            '404':{
                description:"Order not found"
            },
            '500':{
                description:"Server error"
            }
        }
    }
}