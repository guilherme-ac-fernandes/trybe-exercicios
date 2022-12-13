class LightSaber:
    def __init__(self, color, power, isDouble=False):
        self.color = color
        self.power = power
        self.isDouble = isDouble

    def __str__(self):
        return f"""
            |   Color: {self.color}
            |   Power: {self.power}
            |   Is Double: {self.isDouble}
        """
