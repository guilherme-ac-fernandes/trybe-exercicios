from pymongo import MongoClient

# Por padrão o host é localhost e porta 27017
# Estes valores podem ser modificados passando uma URI
# client = MongoClient("mongodb://localhost:27017/")
# client = MongoClient()
# db = client.catalogue

# ---------- Adiciona um documento ----------
# book = {
#     "title": "A Light in the Attic",
# }
# document_id = db.books.insert_one(book).inserted_id
# print(document_id)
# client.close()  # fecha a conexão com o banco de dados


# ---------- Adiciona mais de um documento ----------
# documents = [
#     {
#         "title": "A Light in the Attic",
#     },
#     {
#         "title": "Tipping the Velvet",
#     },
#     {
#         "title": "Soumission",
#     },
# ]
# db.books.insert_many(documents)
# client.close()  # fecha a conexão com o banco de dados


# ---------- Visualizar documento(s) ----------

# print(db.books.find_one())

# # filtrar por caracter presente no título
# for book in db.books.find({"title": {"$regex": "t"}}):
#     print(book["title"])
# client.close()  # fecha a conexão com o banco de dados

with MongoClient() as client:
    db = client.catalogue
    for book in db.books.find({"title": {"$regex": "t"}}):
        print(book["title"])
