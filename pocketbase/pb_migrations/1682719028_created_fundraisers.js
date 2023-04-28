migrate((db) => {
  const collection = new Collection({
    "id": "llklcrguar2toxe",
    "created": "2023-04-28 21:57:08.733Z",
    "updated": "2023-04-28 21:57:08.733Z",
    "name": "fundraisers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jywi0uzt",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "76w0tmpa",
        "name": "target",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "fxnywegb",
        "name": "owner",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("llklcrguar2toxe");

  return dao.deleteCollection(collection);
})
