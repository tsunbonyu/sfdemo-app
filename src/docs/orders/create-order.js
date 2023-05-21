
module.exports = {
    post:{
        tags:['Order CRUD operations'],
        description: "Create Order",
        operationId: "createOrder",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/OrderInput'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "Order created successfully"
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}