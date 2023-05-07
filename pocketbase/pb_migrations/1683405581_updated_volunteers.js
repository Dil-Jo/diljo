migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("257o9kwwl6hzqnr")

  // remove
  collection.schema.removeField("q0cpv9yt")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("257o9kwwl6hzqnr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "q0cpv9yt",
    "name": "area",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
})
