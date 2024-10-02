n = int(input());

def Num(n):
    if(n == 1):
        return 1
    return n * Num(n-1);
print(Num(n));