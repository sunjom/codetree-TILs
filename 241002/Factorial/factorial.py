n = int(input());

def Num(n):
    return n * Num(n);
print(Num(n));