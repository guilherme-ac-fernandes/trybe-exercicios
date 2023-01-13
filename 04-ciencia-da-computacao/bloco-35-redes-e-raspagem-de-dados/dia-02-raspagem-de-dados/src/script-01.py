import requests


URL_PAGE = "https://httpbin.org/encoding/utf8"
response = requests.get(URL_PAGE)
print(response.text)
