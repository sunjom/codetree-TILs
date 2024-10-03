n = int(input())

def Return(n):
    if(n == 1):
        return 1;
    elif(n == 2):
        return 2;
    return Return(n-1) + Return(n//3);
print(Return(n));