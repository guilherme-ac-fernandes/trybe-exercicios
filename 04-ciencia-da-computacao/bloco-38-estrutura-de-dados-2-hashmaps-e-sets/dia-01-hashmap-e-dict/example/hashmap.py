from example.employee import Employee


class HashMap:
    def __init__(self):
        self._buckets = [None for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address] = employee

    def get_value(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address].name

    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None

    def update_value(self, id_num, new_value):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_value


if __name__ == "__main__":
    employees = [
      (14, "name1"),
      (23, "name2"),
      (10, "name3"),
      (9, "name4"),
    ]

    hashmap = HashMap()

    for id_num, name in employees:
        hashmap.insert(Employee(id_num, name))

    print(hashmap.get_value(23))

    print(hashmap.get_value(10))
    hashmap.update_value(10, "name30")
    print(hashmap.get_value(10))
