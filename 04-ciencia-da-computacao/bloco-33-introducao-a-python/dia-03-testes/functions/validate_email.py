def validate_email(email: str):
    if not email[0].isalpha():
        raise ValueError('Email should starts with a letter')
    if '@' not in email:
        raise ValueError('Email should have a @')
    dot_count = [dot for dot in email if dot == '.']
    if len(dot_count) > 1:
        raise ValueError('Email must have only one dot')
    if '.' not in email:
        raise ValueError('Email should have a extension')

    user, domain = email.split('@')
    website, extension = domain.split('.')

    if not 0 < len(extension) <= 3:
        raise ValueError('Invalid mail extension')

    for char in user:
        if not char.isalpha() and char not in "_-" and not char.isdigit():
            raise ValueError('Email must have valid character')

    for char in website:
        if not char.isalpha() and not char.isdigit():
            raise ValueError('Website must have valid character')

    return 'Valid Email'


if __name__ == "__main__":
    print(validate_email('g_u_i@gui1.com'))  # Valid Email
