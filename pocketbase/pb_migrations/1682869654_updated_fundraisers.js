migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe")

  // remove
  collection.schema.removeField("rmmhv0tq")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rmmhv0tq",
    "name": "caption",
    "type": "editor",
    "required": true,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
