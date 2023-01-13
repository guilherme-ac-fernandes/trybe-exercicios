from parsel import Selector
import requests


URL_BASE = "http://books.toscrape.com/catalogue/"

next_page_url = 'page-1.html'

while next_page_url:
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)

    for product in selector.css(".product_pod"):

        title = product.css("h3 a::attr(title)").get()
        price_css = ".product_price .price_color::text"
        price = product.css(price_css).re_first(r"£\d+\.\d{2}")
        print(title, price)

        # Busca o detalhe de um produto
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        description_css = "#product_description ~ p::text"
        description = detail_selector.css(description_css).get()
        suffix = "...more"
        if description.endswith(suffix):
            description = description[:-len(suffix)]
        print(description)

    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()
