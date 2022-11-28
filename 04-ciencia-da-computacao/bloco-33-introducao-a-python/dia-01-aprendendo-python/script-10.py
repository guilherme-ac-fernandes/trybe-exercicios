def gas_station_price(liters: float, type: str):
    gasoline_price = 2.50
    alcohol_price = 1.90
    if type == 'gasoline':
        total = liters * gasoline_price
        if liters <= 20:
            return round(total * 0.96)
        else:
            return round(total * 0.94)
    elif type == 'alcohol':
        total = liters * alcohol_price
        if liters <= 20:
            return round(total * 0.97)
        else:
            return round(total * 0.95, 2)
    else:
        return 'invalid options'


print(gas_station_price(5, 'gasoline'))  # 12.00
print(gas_station_price(20, 'alcohol'))  # 36.86
print(gas_station_price(21, 'alcohol'))  # 37.90
print(gas_station_price(1000, 'gasoline'))  # 2350.00
