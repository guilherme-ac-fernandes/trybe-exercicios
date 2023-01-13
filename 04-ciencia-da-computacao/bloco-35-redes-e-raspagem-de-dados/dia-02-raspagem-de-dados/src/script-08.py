# Resolução proveniente do gabarito presente no course da Trybe,
# mas apresentando adaptações
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7e82ac53-a588-412b-95a5-19727d70ed3a/day/9488d307
# -4a72-4c82-887f-d860ad20a1af/lesson/42a3402a-8e7c-400f-a1ca-8
# dfa7e56be59/solution

from parsel import Selector
import requests


URL = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response = requests.get(URL)
selector = Selector(text=response.text)

flags_css = ".gallery .image img::attr(src)"
flags_url = selector.css(flags_css).getall()

for img_url in flags_url:
    filename = img_url.split("/")[-1]
    image_content = requests.get("https:" + img_url).content
    filename_fixed = filename.replace('.svg', '')
    with open("./country_flags/" + filename_fixed, "wb") as file:
        file.write(image_content)
