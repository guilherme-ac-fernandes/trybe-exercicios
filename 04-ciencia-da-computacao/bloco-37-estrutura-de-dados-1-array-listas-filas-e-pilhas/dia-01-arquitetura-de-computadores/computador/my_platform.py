# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/60f19dc5
# -dea8-40c6-8784-2193b59f0975/lesson/93bdf9af-a7da-4c39-a0ea-e
# 2838292fc07/solution

# documentation: https://docs.python.org/3/library/platform.html
import platform

print(
    f"Plataforma: {platform.system()}\n"
    f"Versão: {platform.release()}\n"
    f"Arquitetura: {platform.architecture()[0]}\n"
)

# Executar: python3 -m computador.my_platform
