from pymongo import MongoClient


# Criação do banco de dados com mongoimport
# docker cp books.json mongodb:/tmp/books.json
# cd tmp
# mongoimport --db library --collection books (continua)
#  --drop --file books.json --jsonArray


with MongoClient() as client:
    db = client.library
    pipelines = [
        {"$match": {"status": "PUBLISH"}},
        {"$unwind": "$categories"},
        {"$group": {"_id": "$categories", "count": {"$sum": 1}}},
        {"$sort": {"count": -1}}
    ]
    for category in db.books.aggregate(pipelines):
        print(category["_id"], category["count"], sep=": ")
