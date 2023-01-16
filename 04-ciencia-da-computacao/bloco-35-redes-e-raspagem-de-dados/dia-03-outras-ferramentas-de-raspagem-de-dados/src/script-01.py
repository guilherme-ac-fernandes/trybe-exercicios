from selenium import webdriver

# Importa o By
from selenium.webdriver.common.by import By

firefox = webdriver.Firefox()

URL = 'https://quotes.toscrape.com/'


def scrape(url):
    firefox.get(url)
    quote = firefox.find_element(
      By.CLASS_NAME, 'text',
    ).get_attribute('innerHTML')
    firefox.quit()
    return quote


print(scrape(URL))
