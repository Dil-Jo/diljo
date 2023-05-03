migrate((db) => {
  const collection = new Collection({
    "id": "257o9kwwl6hzqnr",
    "created": "2023-05-03 06:26:56.112Z",
    "updated": "2023-05-03 06:26:56.112Z",
    "name": "volunteers",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "c58pbrnr",
        "name": "title",
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
      },
      {
        "system": false,
        "id": "jdzxnkmr",
        "name": "longitude",
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
        "id": "ibikuvod",
        "name": "latitude",
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
        "id": "akwjjkab",
        "name": "startingDate",
        "type": "date",
        "required": true,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "xspu3zwa",
        "name": "endingDate",
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
        "id": "8pfpb8cm",
        "name": "organizer",
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
      },
      {
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
  const collection = dao.findCollectionByNameOrId("257o9kwwl6hzqnr");

  return dao.deleteCollection(collection);
})
