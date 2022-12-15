# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/4837cbfa-e27e-4f89-8832-b6830585020f/day/6f89153b-
# 67aa-4eea-8d1c-dfc853809b0d/lesson/71974db2-ca52-4f8a-a37f-06c
# f46aa16fd/solution
from abc import ABC, abstractmethod


# Assistente virtual Alexa
class AlexaAlarm:
    def __init__(self):
        self.__routines = []

    def add_routine(self, routine):
        self.__routines.append(routine)

    def trigger_all_routines(self):
        for routine in self.__routines:
            routine.execute()


class Routine(ABC):
    @abstractmethod
    def execute(self):
        pass


class TurnOnLight(Routine):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.add_routine(self)

    def execute(self):
        print('💡 Luzes acessas 💡')


class MakeCoffee(Routine):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.add_routine(self)

    def execute(self):
        print('Café sendo preparado... Pronto ☕️')


class TurnOnComputer(Routine):
    def __init__(self, alarm):
        self.alarm = alarm
        self.alarm.add_routine(self)

    def execute(self):
        print('Ligando o computador 🖥')


if __name__ == "__main__":
    morning_routine = AlexaAlarm()
    TurnOnLight(morning_routine)
    MakeCoffee(morning_routine)
    TurnOnComputer(morning_routine)

    morning_routine.trigger_all_routines()
