# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7e82ac53-a588-412b-95a5-19727d70ed3a/day/a830c6e2
# -bcb7-4124-a230-453a8cd952bf/lesson/94b609b8-58d3-4ff9-bc63-b
# 6b9f734092e/solution
import requests
from bs4 import BeautifulSoup

html = requests.get("https://pt.wikipedia.org/wiki/Rock_in_Rio")

URL = "https://pt.wikipedia.org"
html = requests.get(f"{URL}/wiki/Rock_in_Rio")

page = html.text
bs_page = BeautifulSoup(page, "html.parser")


def create_url(url: str, urn: str) -> str:
    url = url[:-1] if url[-1] == "/" else url
    urn = urn[1:] if urn[0] == "/" else urn
    return f"{url}/{urn}"


def transform_wiki_links(link: str) -> str:
    return link if link[:4] == "http" else create_url(URL, link)


links = [
    transform_wiki_links(anchor["href"])
    for anchor in bs_page.findAll("a")
    if anchor.get("href") is not None
]

for link in links:
    print(link)
