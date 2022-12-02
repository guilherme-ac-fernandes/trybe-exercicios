# from functions.validate_email import validate_email
from .validate_email import validate_email


def filter_valid_emails(emails: list):
    valid_emails = []
    for email in emails:
        try:
            validate_email(email)
        except ValueError as message:
            print(email, message, sep=": ")
        else:
            valid_emails.append(email)
    return valid_emails


# para executar sem ter problemas com a realização dos testes
# podemos utilizar o comando: python3 -m function.validate_email
# outra forma seria a alteração da variável do Python e alterar o
# PythonPath para raiz do repositório
if __name__ == "__main__":
    print(filter_valid_emails(['g_u_i@gui1.com', '1g_u_i@gui1.com']))
