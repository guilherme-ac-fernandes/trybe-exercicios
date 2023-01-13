from pymongo import MongoClient
import json


def read_books(path):
    try:
        with open(path, mode="r") as file:
            response = json.load(file)
    except FileExistsError:
        print("File Not Found")
    except json.decoder.JSONDecodeError:
        print("File with problems")
    print(len(response))
    return response


client = MongoClient()
db = client.library

books = read_books('./books.json')
db.books.insert_many(books)
client.close()
