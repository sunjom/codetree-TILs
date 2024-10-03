n = int(input())

def Return(n):
    if(n == 1):
        return 2;
    if(n== 2):
        return 4
    return (Return(n-1) * Return(n-2)) % 100
print(Return(n))