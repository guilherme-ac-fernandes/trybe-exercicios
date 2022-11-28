def append_each_letter_of_the_word_in_a_list(word: str):
    # result = list()
    # for letter in word: 
    #     result.append(letter)
    # return result
    return [letter for letter in word]


def return_index_of_the_uppercase_letter(word: str):
    upper_char = [index for index, letter in enumerate(word) if letter.isupper()]
    return upper_char[0]

 
def return_element_from_list_that_is_string(input_list):
    string = [string 
            for string in input_list 
            if isinstance(string, str)]
    return string[0]
