migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("reda46r3e51sw64");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "reda46r3e51sw64",
    "created": "2023-05-04 20:48:03.031Z",
    "updated": "2023-05-04 20:48:03.031Z",
    "name": "crops",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "muj6fxkn",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "xucrofcv",
        "name": "price",
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
        "id": "hcb1xtmd",
        "name": "type",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "A",
            "B",
            "C"
          ]
        }
      },
      {
        "system": false,
        "id": "dcolemsd",
        "name": "thumbnail",
        "type": "file",
        "required": true,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
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
})
