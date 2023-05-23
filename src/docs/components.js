
module.exports = {
    components:{
        schemas:{
            id:{
                type:'string',
                description:"An id of an order",
                example: "tyVgf"
            },
            Order:{
                type:'object',
                properties:{
                    id:{
                        type:'string',
                        description:"Order identification number",
                        example:"ytyVgh"
                    },
                    customer:{
                        type:'string',
                        description:"Customer Name",
                        example:"David Yu"
                    },
                    item:{
                        type:'string',
                        description:"Item's title",
                        example:"Trash Can"
                    },
                    quantity:{
                        type:"string",
                        description:"Item Quantity",
                        example:"2"
                    },
                    fulfillmentCenter:{
                        type:"string",
                        description:"Fulfillment Center",
                        example:"12345"
                    },
                    poNumber:{
                        type:"string",
                        description:"PO Number",
                        example:"22366473"
                    },
                    completed:{
                        type:"boolean",
                        description:"Order completed",
                        example:true
                    }
                }
            },
            OrderInput:{
                type:'object',
                properties:{
                    customer:{
                        type:'string',
                        description:"Customer Name",
                        example:"David Yu"
                    },
                    item:{
                        type:'string',
                        description:"Item's title",
                        example:"Trash Can"
                    },
                    quantity:{
                        type:"string",
                        description:"Item Quantity",
                        example:"2"
                    },
                    fulfillmentCenter:{
                        type:"string",
                        description:"Fulfillment Center",
                        example:"12345"
                    },
                    poNumber:{
                        type:"string",
                        description:"PO Number",
                        example:"22366473"
                    },
                    completed:{
                        type:"boolean",
                        description:"Order completed",
                        example:true
                    }
                }
            },
            Error:{
                type:'object',
                properties:{
                    message:{
                        type:'string'
                    },
                    internal_code:{
                        type:'string'
                    }
                }
            }
        }
    }
}