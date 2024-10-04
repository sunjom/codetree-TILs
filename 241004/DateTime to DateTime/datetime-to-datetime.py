a,b,c = list(map(int,input().split()))

b -=11
c -=11
a -= 11
if(c < 0):
    c += 60
    b -= 1;
if(b < 0):
    b += 24;
    a -=1;
if(a < 0):
    print(-1);
else:
    print(a*24*60 + b*60 + c)