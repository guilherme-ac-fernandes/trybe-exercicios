from parsel import Selector
import requests


response = requests.get("http://books.toscrape.com/")
selector = Selector(text=response.text)

# Extrai todos os preços da primeira página
prices_css = ".product_price .price_color::text"
prices = selector.css(prices_css).re(r"£\d+\.\d{2}")
print(prices)
