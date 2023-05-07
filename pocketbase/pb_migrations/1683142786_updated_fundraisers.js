migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbkjlifu",
    "name": "link",
    "type": "url",
    "required": true,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zbkjlifu",
    "name": "link",
    "type": "url",
    "required": false,
    "unique": false,
    "options": {
      "exceptDomains": null,
      "onlyDomains": null
    }
  }))

  return dao.saveCollection(collection)
})
