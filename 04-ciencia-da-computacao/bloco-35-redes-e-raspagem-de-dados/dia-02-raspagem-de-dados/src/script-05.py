from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue"

URL_BOOK = f"{URL_BASE}/the-grand-design_405/index.html"

response = requests.get(URL_BOOK)

selector = Selector(text=response.text)

title = selector.css("h1::text").get()

price_css = ".product_main .price_color::text"
price = selector.css(price_css).re_first(r"£\d+\.\d{2}")

description = selector.css("#product_description ~ p::text").get()
suffix = " ...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

cover = URL_BASE + selector.css("#product_gallery img::attr(src)").get()

availability_css = ".product_main .availability::text"
availability = selector.css(availability_css).re_first(r"\d")

print(title, price, description, cover, availability, sep=", ")
