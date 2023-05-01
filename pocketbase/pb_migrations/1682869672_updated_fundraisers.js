migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "szoo0126",
    "name": "caption",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe")

  // remove
  collection.schema.removeField("szoo0126")

  return dao.saveCollection(collection)
})
