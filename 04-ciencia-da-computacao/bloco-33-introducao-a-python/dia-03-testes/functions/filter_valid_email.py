from validate_email import validate_email


def filter_valid_email(emails: list):
    valid_emails = []
    for email in emails:
        try:
            validate_email(email)
        except ValueError as message:
            print(email, message, sep=": ")
        else:
            valid_emails.append(email)
    return valid_emails


if __name__ == "__main__":
    print(filter_valid_email(['g_u_i@gui1.com', '1g_u_i@gui1.com']))
