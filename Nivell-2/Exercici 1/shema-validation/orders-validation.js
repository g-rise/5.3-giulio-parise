db.createCollection('orders', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["client_id", "store_id", "order_date", "order_type", "order_details", "total_price", "additional_note"],
      properties: {
        client_id: {
          bsonType: "objectId",
          description: "Identifier of the client who placed the order"
        },
        store_id: {
          bsonType: "objectId",
          description: "Identifier of the store who received the order"
        },
        order_date: {
          bsonType: "date",
          description: "Date and time of the order"
        },
        order_type: {
          enum: ["delivery", "pickup"],
          description: "Type of the order"
        },
        order_details: {
          bsonType: "array",
          description: "Details of the products ordered",
          items: {
            bsonType: "object",
            required: ["product_id", "quantity"],
            properties: {
              product_id: {
                bsonType: "objectId",
                description: "Identifier of the product"
              },
              quantity: {
                bsonType: "int",
                description: "Quantity of the product ordered"
              }
            }
          }
        },
        total_price: {
          bsonType: "double",
          description: "Total price of the order"
        },
        additional_note: {
          bsonType: "string",
          description: "Additional note for the order"
        }
      }
    }
  }
})