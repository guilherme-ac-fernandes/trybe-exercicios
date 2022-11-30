names = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]
my_family_names = ["Guilherme", "João", "Neide", "Mauro", "Lota", "Nala"]

# Resolução proveniente do site TutorialsTeacher
# source: https://www.tutorialsteacher.com/python/max-method


def bigger_string(name_list: list):
    return max(name_list, key=len)


print(bigger_string(names))  # Fernanda
print(bigger_string(my_family_names))  # Guilherme
