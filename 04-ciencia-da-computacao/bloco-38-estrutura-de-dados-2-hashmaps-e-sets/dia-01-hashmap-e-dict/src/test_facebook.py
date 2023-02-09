def check_words(words, letters):
    letters_dict = {letter for letter in letters}

    count_general = 0
    for word in words:
        print(f"Analisando a palavra {word}")
        count = 0
        for char in word:
            if char in letters_dict:
                count += 1

        if count == len(word):
            count_general += count

    return count_general


if __name__ == "__main__":
    words = ["cat", "bt", "hat", "tree"]
    chars = "atach"
    print(f"Resposta final: {check_words(words, chars)}")  # 6

    words_2 = ["hello", "world", "students"]
    chars_2 = "welldonehoneyr"
    print(f"Resposta final: {check_words(words_2, chars_2)}")  # 10
