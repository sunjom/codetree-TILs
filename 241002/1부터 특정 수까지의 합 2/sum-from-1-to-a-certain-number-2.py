n = int(input())
def Return(n):
    if(n == 1):
        return 1;
    return n + Return(n-1)

print(Return(n));