db.createCollection('stores', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["address", "postal_code", "city", "province"],
      properties: {
        address: {
          bsonType: "string",
          description: "Address of the store"
        },
        postal_code: {
          bsonType: "int",
          description: "Postal code of the store"
        },
        city: {
          bsonType: "string",
          description: "City of the store"
        },
        province: {
          bsonType: "string",
          description: "Province of the store"
        }
      }
    }
  }
})