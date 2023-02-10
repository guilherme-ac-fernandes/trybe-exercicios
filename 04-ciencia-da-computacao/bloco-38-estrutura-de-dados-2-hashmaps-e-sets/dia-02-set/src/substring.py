# Resolução proveniente do dabarito presente no course da Trybe
# source: https://app.betrybe.com/learn/course/5e938f69-6e32-43
# b3-9685-c936530fd326/module/290e715d-73e3-4b2d-a3c7-4fe113474
# 070/section/2ced8aa4-70a8-4d1b-bce3-cd9901f55a29/day/205a92d2
# -72de-4ddd-a800-b969f28794c5/lesson/f6ed0e4a-65e8-479f-a920-0
# 76d7ce1b4d8
def longer_no_repeating_substring_len(string):
    biggest = 0
    for index, _ in enumerate(string):
        substr = set()
        for letter in string[index:]:
            if letter in substr:
                break
            substr.add(letter)
        if len(substr) > biggest:
            biggest = len(substr)
    return biggest


if __name__ == "__main__":
    string = "serdevemuitolegalmasehprecisoestudarbastante"
    print(longer_no_repeating_substring_len(string))

    # Complexidade de Tempo (longer_no_repeating_substring_len) = O(n²)
