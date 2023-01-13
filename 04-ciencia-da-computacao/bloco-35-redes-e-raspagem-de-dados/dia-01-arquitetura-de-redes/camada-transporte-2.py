# Resolução proveniente do gabarito presente no course da Trybe
# https://app.betrybe.com/learn/course/5e938f69-6e32-43b3-9685-c
# 936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474070/sectio
# n/7e82ac53-a588-412b-95a5-19727d70ed3a/day/8e345627-55f4-4fb0-8
# 196-86c8243eed11/lesson/a4f131bf-54a4-40b6-bc93-a98a7a20affa/solution
from socketserver import UDPServer, DatagramRequestHandler

ADDRESS = "", 8084


class EchoHandler(DatagramRequestHandler):
    """Responde requisições repetindo o que foi recebido."""

    def handle(self):
        for line in self.rfile:
            self.wfile.write(line)
            print(line.decode("utf-8").strip())


if __name__ == "__main__":
    with UDPServer(ADDRESS, EchoHandler) as server:
        server.serve_forever()
