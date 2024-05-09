db.createCollection('products', {
  validator: {
    $jsonSchema: {
      bsontype: "object",
      required: ["name", "description", "image", "price", "category"],
      properties: {
        name: {
          bsonType: "string",
          description: "Name of the product"
        },
        description: {
          bsonType: "string",
          description: "Description of the product"
        },
        image: {
          bsonType: "string",
          description: "URL of the product image"
        },
        price: {
          bsonType: "double",
          description: "Price of the product"
        },
        category: {
          bsonType: "object",
          description: "The category of the product",
          required: ["_id", "name"],
          properties: {
            _id: {
              bsonType: "objectId",
              description: "Unique identifier of the category"
            },
            name: {
              bsonType: "string",
              description: "Name of the category"
            }
          }
        }
      }
    }
  }
})