n = int(input());
def Return(n):
    if(n < 10):
        return n ** 2
    return (n%10)**2 + Return(n//10);
print(Return(n));