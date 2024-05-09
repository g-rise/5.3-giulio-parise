db.createCollection('deliveries', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["delivery_date", "delivery_person_id", "order_id"],
      properties: {
        delivery_date: {
          bsonType: "date",
          description: "Date and time of the delivery"
        },
        delivery_person_id: {
          bsonType: "objectId",
          description: "Identifier of the delivery person"
        },
        order_id: {
          bsonType: "objectId",
          description: "Identifier of the order associated with the delivery"
        }

      }
    }
  }
}) 