def Check(Str):
    Bool = False;
    for i in range(len(Str)):
        if(Str[0] != Str[i]):
            Bool = True;
            break;
    if(Bool):
        print("Yes")
    else:
        print("No")

a = input()

Check(a);