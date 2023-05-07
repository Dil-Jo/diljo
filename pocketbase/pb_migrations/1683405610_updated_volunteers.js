migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("257o9kwwl6hzqnr")

  // remove
  collection.schema.removeField("enzzldrl")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("257o9kwwl6hzqnr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "enzzldrl",
    "name": "fundraiser",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "llklcrguar2toxe",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
