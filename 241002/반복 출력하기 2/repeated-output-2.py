n = int(input());

def Print(n):
    if(n == 0):
        return;
    print("HelloWorld")
    Print(n-1)
Print(4)