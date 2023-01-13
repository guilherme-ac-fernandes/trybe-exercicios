# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7e82ac53-a588-412b-95a5-19727d70ed3a/day/9488d307
# -4a72-4c82-887f-d860ad20a1af/lesson/42a3402a-8e7c-400f-a1ca-8
# dfa7e56be59/solution
import requests

URL_BASE = "http://quotes.toscrape.com/api/quotes?page="

has_next = True
page = 1
counter = 0
while has_next:
    response = requests.get(f"{URL_BASE}{page}")
    json_content = response.json()
    print(json_content)
    for quote in json_content["quotes"]:
        print(counter, quote["text"])
        counter += 1
    has_next = json_content["has_next"]
    page = json_content["page"] + 1
