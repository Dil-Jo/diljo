migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("257o9kwwl6hzqnr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pnoulukh",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 5,
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
  const collection = dao.findCollectionByNameOrId("257o9kwwl6hzqnr")

  // remove
  collection.schema.removeField("pnoulukh")

  return dao.saveCollection(collection)
})
