product_name, product_code = input().split()
product_code = int(product_code)

# Please write your code here.

class code:
    def __init__(self, n='codetree', p=50):
        self.name = n
        self.pcode = p

    def Print(self):
        print(f"product {self.pcode} is {self.name}")
a = code()
b = code(product_name, product_code)

a.Print()
b.Print()

