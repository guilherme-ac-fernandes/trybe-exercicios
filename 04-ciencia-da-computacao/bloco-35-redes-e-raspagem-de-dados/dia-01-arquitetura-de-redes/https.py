# Resolução proveniente do gabarito presente no course da Trybe
# https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c
# 936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/sectio
# n/7e82ac53-a588-412b-95a5-19727d70ed3a/day/8e345627-55f4-4fb0-8
# 196-86c8243eed11/lesson/a4f131bf-54a4-40b6-bc93-a98a7a20affa/solution
import ssl
from http.server import HTTPServer, SimpleHTTPRequestHandler
ssl_context = ssl.SSLContext()
ssl_context.load_cert_chain("cert.pem", keyfile="key.pem")
server_address = ("0.0.0.0", 8000)
httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
httpd.socket = ssl_context.wrap_socket(httpd.socket, server_side=True)
httpd.serve_forever()
