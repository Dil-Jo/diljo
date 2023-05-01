migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yaklothj",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "Education",
        "Emergencies",
        "Enviornment",
        "Medical",
        "Utility Bills"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yaklothj",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "education",
        "emergencies",
        "enviornment",
        "medical",
        "utilityBills"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
