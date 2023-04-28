migrate((db) => {
  const collection = new Collection({
    "id": "bb1pk1ljwv6pxyc",
    "created": "2023-04-28 21:56:26.436Z",
    "updated": "2023-04-28 21:56:26.436Z",
    "name": "donations",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "yivlk13l",
        "name": "amount",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
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
      },
      {
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
      },
      {
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
  const collection = dao.findCollectionByNameOrId("bb1pk1ljwv6pxyc");

  return dao.deleteCollection(collection);
})
