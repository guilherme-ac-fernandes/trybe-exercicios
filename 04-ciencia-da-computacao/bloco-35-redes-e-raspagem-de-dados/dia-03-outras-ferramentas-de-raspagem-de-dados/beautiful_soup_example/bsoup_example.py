import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
# print(page.content)

html_content = page.text

soup = BeautifulSoup(html_content, "html.parser")
# print(soup.prettify())


# acessando a tag 'title'
title = soup.title
footer = soup.footer

# Tipos
# print(title)
# print(type(title))
# print(title.name)
# print(footer['class'])
# print(title.string)
# print(type(title.string))

# Acesso
# print(soup.find_all("p"))
# print(soup.find(id="quote"))
# print(soup.get_text())
# print(soup.find_all("div", {"class": "quote"}))
