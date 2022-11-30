def append_each_letter_of_the_word_in_a_list(word: str):
    # result = list()
    # for letter in word: 
    #     result.append(letter)
    # return result
    return [letter for letter in word]


def return_index_of_the_uppercase_letter(word: str):
    # Resolução fornecida pela equipe de instrução da Trybe
    # source: https://github.com/tryber/sd-020-b-live-lectures/
    # blob/CS-1.0-Mentoria-introducaoPython/exercises/repetition.py
    # for letra in word:
    #     if letra.isupper() == True:
    #         return word.index(letra)
    upper_char = [index
                  for index, letter in enumerate(word)
                  if letter.isupper()]
    return upper_char[0]


def return_element_from_list_that_is_string(input_list):
    # Resolução fornecida pela equipe de instrução da Trybe
    # source: https://github.com/tryber/sd-020-b-live-lectures/
    # blob/CS-1.0-Mentoria-introducaoPython/exercises/repetition.py
    # for ele in input_list:
    #     if isinstance(ele, str):
    #         return ele
    string = [string
              for string in input_list 
              if isinstance(string, str)]
    return string[0]
