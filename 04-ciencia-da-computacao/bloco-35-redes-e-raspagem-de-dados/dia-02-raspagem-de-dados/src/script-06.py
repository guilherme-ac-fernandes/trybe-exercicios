from pymongo import MongoClient

# Criação do banco de dados com mongoimport
# docker cp books.json mongodb:/tmp/books.json
# cd tmp
# mongoimport --db library --collection books (continua)
#  --drop --file books.json --jsonArray


category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    books = db.books.find({"categories": category})
    for book in books:
        print(book["title"])
