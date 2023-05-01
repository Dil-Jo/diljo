migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "t8m767gm",
    "name": "anonymityStatus",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "anonymous",
        "visible"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nxqos840",
    "name": "category",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "education",
        "emergency",
        "healthcare"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe")

  // remove
  collection.schema.removeField("t8m767gm")

  // remove
  collection.schema.removeField("nxqos840")

  return dao.saveCollection(collection)
})
