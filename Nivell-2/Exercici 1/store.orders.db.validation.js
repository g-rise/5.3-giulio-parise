db.createCollection('orders', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["store", "order_details", "total_price", "client", "order_type"],
      properties: {
        
        store: {
          bsonType: "object",
          required: ["store_id"],
          properties: {
            store_id: {
              bsonType: "objectId",
              description: "Identifier of the store"
            }
          }
        },

        order_details: {
          bsonType: "array",
          description: "Details of the products ordered",
          items: {
            bsonType: "object",
            required: ["product_quantity", "product_name", "partial_price"],
            properties: {
              quantity: {
                bsonType: "int",
                description: "Quantity of the product ordered"
              },
              product_name: {
                bsonType: "string",
                description: "Name of the product"
              },
              partial_price: {
                bsonType: "double",
                description: "Partial price of the product/s"
              }
            }
          }
        },

        total_price: {
          bsonType: "double",
          description: "Total price of the order"
        },

        client: {
          bsonType: "object",
          required: ["client_id", "client_name", "client_lastname"],
          properties: {
            client_id: {
              bsonType: "objectId",
              description: "Identifier of the client"
            },
            client_name: {
              bsonType: "string",
              description: "Name of the client"
            },
            client_lastname: {
              bsonType: "string",
              description: "Lastname of the client"
            }
          }
        },

        order_type: {
          enum: ["delivery", "pickup"],
          description: "Type of the order"
        },

        deliver_in: {
          bsonType: "object",
          required: ["client_address", "client_postal_code", "client_city", "client_province", "client_telephone"],
          properties: {
            client_address: {
              bsonType: "string",
              description: "Address of the client"
            },
            client_postal_code: {
              bsonType: "integer",
              description: "Postal code of the client"
            },
            client_city: {
              bsonType: "string",
              description: "City of the client"
            },
            client_province: {
              bsonType: "string",
              description: "Province of the client"
            },
            client_telephone: {
              bsonType: "string",
              description: "Phone of the client"
            },
          }
        },
       
        additional_note: {
          bsonType: "string",
          description: "Additional note for the order"
        }
      }
    }
  }
})