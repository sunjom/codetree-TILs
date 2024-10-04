n = int(input());
Str = ""
while n >0:
    val = n%2;
    Str += str(val);
    n //=2;
print(Str[::-1])