from functions.filter_valid_emails import filter_valid_emails


def test_validate_email_list_with_only_valid_email():
    emails = ['user@valid.com', 'another_user@trybe.br']
    valid_emails = ['user@valid.com', 'another_user@trybe.br']
    assert filter_valid_emails(emails) == valid_emails


def test_validate_email_list_with_empty_list():
    assert filter_valid_emails([]) == []


def test_validate_email_list_with_invalid_email():
    assert filter_valid_emails(['uservalid.com']) == []


def test_validate_email_list_with_email_valid_and_invalid_email():
    emails = ['user@valid..com', 'another_user@trybe.br']
    valid_emails = ['another_user@trybe.br']
    assert filter_valid_emails(emails) == valid_emails
