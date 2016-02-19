# requires python 3

import getpass
import hashlib
import random
#from typing import List

import sys

import math

import time


class Quote:
    def __init__(self, quote: str, author, question, answer):
        self.quote = quote
        self.author = author
        self.question = question
        self.answer = answer


class QuoteList:
    quotes = None  # type: List[Quote]

    def __init__(self):
        self.quotes = [

            Quote(
                "Life is very interesting... in the end, some of your greatest pains, become your greatest strengths.",
                "Drew Barrymore", "The pains becomes your?", "strengths"),

            Quote("When everything seems like an uphill struggle, just think of the view from the top",
                  "Unknown", "An uphill what?", "struggle"),

            Quote("Destroy what destroys you!",
                  "Unknown", "What is destroyed?", "you"),

            Quote("Don't be ashamed of your story. It will inspire others!",
                  "Unknown", "What will it do to others?", "inspire")
        ]

        random.shuffle(self.quotes)


def read_line() -> str:
    return sys.stdin.readline().strip()


def hash_sum(plain_text: bytearray) -> bytearray:
    hasher = hashlib.sha512()
    hasher.update(plain_text)
    return hasher.digest()


def show_quote(quote: Quote) -> str:
    count = 0  # type: int
    while True:
        print('\n')
        print(' "%s" ~ %s\n' % (quote.quote, quote.author))

        hint = ""
        if count == 5:
            hint = ' (hint: %s)' % quote.answer

        print(' %s%s -> ' % (quote.question, hint), end="", flush=True)
        line = read_line()
        if line == quote.answer:
            break
        count += 1

    return quote.answer


class CharClass:

    def __init__(self, name: str, chars: str):
        self.name = name
        self.chars = chars

    def get_char(self, index: int, max: int) -> str:
        part = index / max

        char_index = int(round(len(self.chars) * part))

        if char_index < 0:
            char_index = 0

        if char_index > len(self.chars) - 1:
            char_index = len(self.chars) - 1

        return self.chars[char_index]


class CharClasses:

    def __init__(self):
        self.classes = [
            CharClass("Alpha Lower", "abcdefghijklmnopqrstuvxyz"),
            CharClass("Alpha Upper", "ABCDEFGHIJKLMNOPQRSTUVXYZ"),
            CharClass("Numerical", "0123456789"),
            CharClass("Special", "!#%&/()=?_-.@")
        ]

    def get_class(self, char: str):
        for char_class in self.classes:
            if char in char_class.chars:
                return char_class
        return self.classes[0]

def main():

    quotelist = QuoteList()

    print("apassgen 1.0")
    pwd = getpass.getpass("Initial password: ")

    hashed_pwd = hash_sum(pwd.encode('utf-8'))

    # collect the answers
    answers = []
    for quote in quotelist.quotes:
        answer = show_quote(quote)
        answers.append(answer)

    answers.sort()

    # hash the password with the answers
    for answer in answers:
        hashed_pwd = hash_sum(hashed_pwd + answer.encode('utf-8'))

    char_classes = CharClasses()

    new_password = ""

    for i in range(0, len(pwd)):
        pwd_char = pwd[i]
        char_class = char_classes.get_class(pwd_char)

        hash_char_byte_value = int(hashed_pwd[i])
        new_char = char_class.get_char(hash_char_byte_value, 255)
        new_password += new_char

    print('\n')
    print('password will be removed in 10 seconds')
    print("\ngenerated password: %s" % new_password, end="", flush=True)

    time.sleep(10)

    print("\rgenerated password: ", end="", flush=True)
    for char in new_password:
        print("*", end="", flush=True)
    print()

if __name__ == "__main__":
    main()
