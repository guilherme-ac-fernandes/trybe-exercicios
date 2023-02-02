# Resolução proveniente do gabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/7939c08a-6df3-4e20-81f3-9581c68d940b/day/c55250a2
# -6d5d-4dba-a336-4e9a9a0cc6b5/lesson/e5ad69e7-2ad6-499c-977b-8
# c4cdb779b42/solution
from src.stack_linked_list import Stack

if __name__ == "__main__":
    garage = Stack()
    option = 0

    while option != 4:
        print('Operations: ')
        print('1. Add vehicle')
        print('2. Remove a vehicle')
        print('3. Parked vehicles')
        print('4. Close the program')
        option = int(input('Option: '))

        if option == 1:
            plate_number = input('plate number: ')
            garage.push(plate_number)
            print('Vehicle ' + plate_number + ' parked')

        elif option == 2:
            vehicle_plate = input('plate number: ')
            street = Stack()
            removed = False
            while not garage.is_empty():
                parked_plate = garage.pop()
                if parked_plate == vehicle_plate:
                    print('Vehicle ' + vehicle_plate + ' removed')
                    removed = True
                else:
                    street.push(parked_plate)

            while not street.is_empty():
                street_vehicle = street.pop()
                garage.push(street_vehicle)

            if not removed:
                print('There is no vehicle parked with this plate')

        elif option == 3:
            print('Parked vehicles: ' + str(garage))

        else:
            print('Finishing The garage Plus 2000!')
            option = 4

        # Complexidade de Tempo
        # Este algoritmo realiza inserções de itens, que na Pilha possui
        # Complexidade de tempo é O(1), porém existem alguns whiles que
        # percorrem listas, e por isso sua Complexidade de tempo é O(n).
