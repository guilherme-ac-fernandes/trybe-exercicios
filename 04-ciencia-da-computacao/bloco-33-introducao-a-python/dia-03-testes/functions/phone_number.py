letter_number = {
  'A': 2,
  'B': 2,
  'C': 2,
  'D': 3,
  'E': 3,
  'F': 3,
  'G': 4,
  'H': 4,
  'I': 4,
  'J': 5,
  'K': 5,
  'L': 5,
  'M': 6,
  'N': 6,
  'O': 6,
  'P': 7,
  'Q': 7,
  'R': 7,
  'S': 7,
  'T': 8,
  'U': 8,
  'V': 8,
  'W': 9,
  'X': 9,
  'Y': 9,
  'Z': 9,
  '0': 0,
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '-': '-',
}


def phone_number(phone: str):
    if not 1 < len(phone) <= 30:
        raise ValueError('Invalid phone number')
    number = ''
    for char in phone.upper():
        number += str(letter_number[char])
    return number


if __name__ == "__main__":
    print(phone_number('1-HOME-SWEET-HOME'))  # 1-4663-79338-4663
    print(phone_number('MY-MISERABLE-JOB'))  # 69-647372253-562
    print(phone_number(''))  # ValueError: Invalid phone number
