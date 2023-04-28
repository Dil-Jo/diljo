migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb1pk1ljwv6pxyc")

  // remove
  collection.schema.removeField("wqhipdhy")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m7ayvvnx",
    "name": "fundraiser",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "llklcrguar2toxe",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4vglxytk",
    "name": "transactionId",
    "type": "text",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ijxqkiqj",
    "name": "donor",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bb1pk1ljwv6pxyc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wqhipdhy",
    "name": "timestamp",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("m7ayvvnx")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4vglxytk",
    "name": "transactionId",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ijxqkiqj",
    "name": "donor",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
