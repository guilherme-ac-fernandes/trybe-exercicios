from selenium import webdriver
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

BASE_URL = 'https://www.wikimetal.com.br'
SPECIFIC_URL = '/iron-maiden-scorpions-kiss-veja-melhores-albuns-1982/'
URL = f'{BASE_URL}{SPECIFIC_URL}'


def scrape(url):
    firefox.get(url)

    paragraphs = firefox.find_elements(By.TAG_NAME, 'p')

    for paragraph in paragraphs:
        print(paragraph.text)

    firefox.quit()


scrape(URL)
