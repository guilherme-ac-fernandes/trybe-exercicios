from pymongo import MongoClient


category = input("Escolha uma categoria: ")
with MongoClient() as client:
    db = client.library
    books = db.books.find({"categories": category})
    for book in books:
        print(book["title"])
