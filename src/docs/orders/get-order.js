module.exports = {
    get:{
        tags:['Order CRUD operations'],
        description: "Get a order",
        operationId: "getOrder",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "A single order id"
            }
        ],
        responses:{
            '200':{
                description:"Order is obtained",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/Order"
                        }
                    }
                }
            },
            '404':{
                description: "Order is not found",
                content:{
                    'application/json':{
                        schema:{
                            $ref:'#/components/schemas/Error',
                            example:{
                                message:"We can't find the order",
                                internal_code:"Invalid id"
                            }
                        }
                    }
                }
            }
        }
    }
}