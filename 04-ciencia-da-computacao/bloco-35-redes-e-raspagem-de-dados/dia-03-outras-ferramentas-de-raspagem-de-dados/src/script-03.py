from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.firefox.options import Options

options = Options()
options.add_argument('--headless')

firefox = webdriver.Firefox(options=options)

URL = 'https://diolinux.com.br/'


def scrape(url):
    firefox.get(url)
    posts = []

    for post in firefox.find_elements(By.CLASS_NAME, 'inhype-grid-post'):
        new_item = dict()

        new_item['title'] = post.find_element(
            By.CLASS_NAME, 'post-title',
        ).find_element(By.TAG_NAME, 'a').get_attribute('innerHTML')

        new_item['link'] = post.find_element(
            By.CLASS_NAME, 'post-title',
        ).find_element(By.TAG_NAME, 'a').get_attribute('href')

        posts.append(new_item)
    return posts


posts = scrape('https://diolinux.com.br/')

for post in posts:
    print(post)
