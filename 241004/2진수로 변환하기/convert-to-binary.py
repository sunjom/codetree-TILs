n = int(input());
Str = ""
while n >0:
    val = n%2;
    Str += str(val);
    n //=2;
if not Str:
    print(0);
else:
    print(Str[::-1])