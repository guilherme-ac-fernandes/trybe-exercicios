def gas_station_price(liters: float, type: str):
    gasoline_price = 2.50
    alcohol_price = 1.90
    if type == 'G':
        total = liters * gasoline_price
        if liters <= 20:
            return round(total * 0.96, 2)
        else:
            return round(total * 0.94, 2)
    elif type == 'A':
        total = liters * alcohol_price
        if liters <= 20:
            return round(total * 0.97, 2)
        else:
            return round(total * 0.95, 2)
    else:
        return 'invalid options'


print(gas_station_price(5, 'G'))  # 12.00
print(gas_station_price(20, 'A'))  # 36.86
print(gas_station_price(21, 'A'))  # 37.90
print(gas_station_price(1000, 'G'))  # 2350.00
