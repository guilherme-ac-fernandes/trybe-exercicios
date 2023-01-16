# importação do webdriver, que é o que
# possibilita a implementação para todos
# os principais navegadores da web
from time import sleep
from selenium import webdriver

# Para usar o chrome ao invés do firefox
# trocamos FirefoxOptions por ChromeOptions
# Todavia, caso esteja utilizando o docker,
# atente-se ao container sendo utilizado.
options = webdriver.FirefoxOptions()
options.add_argument('--ignore-certificate-errors')
options.add_argument('--ignore-ssl-errors=yes')
options.add_argument('--start-maximized')

URL = "http://localhost:4444/wd/hub"
firefox = webdriver.Remote(command_executor=URL, options=options)

# requisições para essa instância criada utilizando o método `get`
response = firefox.get("https://www.python.org/")


# espera 10 segundos
sleep(10)
# encerra o navegador, importante quando usamos containers
firefox.quit()
