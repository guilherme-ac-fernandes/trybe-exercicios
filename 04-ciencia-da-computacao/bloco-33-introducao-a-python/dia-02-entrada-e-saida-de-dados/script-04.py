import json
import csv
import sys


def open_books():
    try:
        with open('data/books.json', mode='r') as book_file:
            books = json.load(book_file)
            total_books = len(books)
    except FileExistsError:
        print('File Not Found')
        sys.exit(1)
    except json.decoder.JSONDecodeError:
        print('File with problems')
        sys.exit(1)
    finally:
        book_file.close()
    return books, total_books


def create_report(books_categories_percetage: list):
    with open('data/books_report.csv', mode='w') as book_report:
        writer = csv.writer(book_report)
        headers = ["Category", "Percentage"]
        writer.writerow(headers)
        for category, percetage in books_categories_percetage:
            row = [category, percetage]
            writer.writerow(row)


if __name__ == "__main__":
    books, total_books = open_books()
    books_categories = {}

    for book in books:
        for category in book['categories']:
            if category not in books_categories:
                books_categories[category] = 0
            books_categories[category] += 1

    books_categories_percetage = [
        [category, amount / total_books]
        for category, amount in books_categories.items()
    ]

    create_report(books_categories_percetage)
