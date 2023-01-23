# Resolução proveniente da resolução presente
# no site PrepInsta
# source: https://prepinsta.com/python-program/
# prime-number-using-recursion/
def prime_number(n, i=2):
    if n == i:
        return True
    elif n % i == 0:
        return False
    return prime_number(n, i + 1)


if __name__ == "__main__":
    n = 971
    if prime_number(n):
        print("Yes,", n, "is Prime")
    else:
        print("No,", n, "is not a Prime")
