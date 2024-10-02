n = int(input());

def Print1(n):
    if(n ==0):
        return
    Print1(n-1)
    print(n,end=" ")

def Print2(n):
    if(n == 0):
        return;
    print(n,end =" ")
    Print2(n-1)
Print1(n)
print()
Print2(n)