db.createCollection('clients', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["first_name", "last_name", "address", "postal_code", "city", "province", "telephone"],
      properties: {
        first_name: {
          bsonType: "string",
          description: "First name of the client"
        },
        last_name: {
          bsonType: "string",
          description: "Last name of the client"
        },
        address: {
          bsonType: "string",
          description: "Address of the client"
        },
        postal_code: {
          bsonType: "int",
          description: "Postal code of the client"
        },
        city: {
          bsonType: "string",
          description: "City of the client"
        },
        province: {
          bsonType: "string",
          description: "Province of the client"
        },
        telephone: {
          bsonType: "string",
          description: "Telephone of the client"
        }
      }
    }
  }
}) 