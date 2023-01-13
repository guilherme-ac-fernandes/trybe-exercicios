import requests


URL_PAGE = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
response = requests.get(URL_PAGE)

print('----- Requisição sem Headers -----')
if ("bot detected" not in response.text):
    print('Sucesso', response.status_code)

else:
    print('Falha na requisição')


print('----- Requisição com Headers -----')
response = requests.get(
    "https://scrapethissite.com/pages/advanced/?gotcha=headers",
    headers={"User-agent": "Mozilla", "Accept": "text/html"},
)

if ("bot detected" not in response.text):
    print('Sucesso', response.status_code)
else:
    print('Falha na requisição')
