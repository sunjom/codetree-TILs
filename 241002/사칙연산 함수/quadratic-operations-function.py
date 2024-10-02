a,b,c = list(input().split())
Cal = ['+','-','/','*']
Str = "";
if(b not in Cal):
    print("False")
else:
    if(b == Cal[0]):
        Str = f"{a} + {c} = {int(a)+int(c)}"
    elif (b == Cal[1]):
        Str = f"{a} - {c} = {int(a)-int(c)}"
    elif (b == Cal[2]):
        Str = f"{a} - {c} = {int(a)/int(c)}"
    elif (b == Cal[3]):
        Str = f"{a} - {c} = {int(a)*int(c)}"
print(Str)