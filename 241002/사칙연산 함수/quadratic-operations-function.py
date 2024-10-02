a,b,c = list(input().split())
Cal = ['+','-','/','*']
Str = "";
if(b not in Cal):
    print("False")
else:
    if(b == Cal[0]):
        Str = f"{a} + {b} = {int(a)+int(b)}"
print(Str)