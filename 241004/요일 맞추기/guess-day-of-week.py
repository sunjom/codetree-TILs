a,b,c,d = list(map(int,input().split()));

Date = [0,31,28,31,30,31,30,31,31,30,31,30,31]
State = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
cDate = 0
for i in range(1,c):
    cDate += Date[i];
cDate += d
print(State[cDate%7])