a,b,c,d = list(map(int,input().split()));

Day = [0,31,28,31,30,31,30,31,31,30,31,30,31]
aDay = 0
cDay = 0
for i in range(1,a+1):
    aDay += Day[i];
for i in range(1,c+1):
    cDay += Day[i];
print(cDay-aDay+d-b);