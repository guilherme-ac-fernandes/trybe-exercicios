from example.employee import Employee


class HashMapSepareteChaining:
    def __init__(self):
        self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None


if __name__ == "__main__":
    employees = [
      (13, "name1"),
      (23, "name2"),
    ]

    hashmap = HashMapSepareteChaining()

    for id_num, name in employees:
        hashmap.insert(Employee(id_num, name))

    print(hashmap.get_value(23))
