n = int(input());

def Return(n):
    if(n == 1):
        return 0;
    if(n %2 == 0):
        return 1 + Return(n//2) 
    else:
        return 1 + Return(n//3)

print(Return(n));