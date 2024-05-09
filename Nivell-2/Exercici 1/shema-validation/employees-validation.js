db.createCollection('employees', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["first_name", "last_name", "nif", "telephone", "role", "store_id"],
      properties: {
        first_name: {
          bsonType: "string",
          description: "First name of the employee"
        },
        last_name: {
          bsonType: "string",
          description: "Last name of the employee"
        },
        nif: {
          bsonType: "string",
          description: "Fiscal Identifier of the employee"
        },
        telephone: {
          bsonType: "string",
          description: "Phone number of the employee"
        },
        role: {
          enum: ["cook", "delivery"],
          description: "Role of the employee (cook or delivery)"
        },
        store_id: {
          bsonType: "objectId",
          description: "Identifier of the store where the employee works"
        }
      }
    }
  }
})