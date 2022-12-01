# from functions.validate_email import validate_email


# def filter_valid_email(emails: list):
#     valid_emails = []
#     for email in emails:
#         try:
#             validate_email(email)
#         except ValueError as message:
#             print(email, message, sep=": ")
#         else:
#             valid_emails.append(email)
#     return valid_emails


from functions.filter_valid_email import filter_valid_email


def test_validate_email_list_with_only_valid_email():
    emails = ['user@valid.com', 'another_user@trybe.br']
    valid_emails = ['user@valid.com', 'another_user@trybe.br']
    assert filter_valid_email(emails) == valid_emails


def test_validate_email_list_with_empty_list():
    assert filter_valid_email([]) == []


def test_validate_email_list_with_invalid_email():
    assert filter_valid_email(['uservalid.com']) == []


def test_validate_email_list_with_email_valid_and_invalid_email():
    emails = ['user@valid..com', 'another_user@trybe.br']
    valid_emails = ['another_user@trybe.br']
    assert filter_valid_email(emails) == valid_emails
