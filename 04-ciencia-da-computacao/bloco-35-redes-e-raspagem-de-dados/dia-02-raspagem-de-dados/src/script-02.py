import requests


URL_PAGE = "https://api.github.com/users"
users = requests.get(URL_PAGE).json()

for user in users:
    print(f" --> {user['login']} (URL: {user['url']})")
