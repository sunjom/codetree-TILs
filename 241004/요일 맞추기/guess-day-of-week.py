a,b,c,d = list(map(int,input().split()));

def ReturnDay(n):
    Date = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    Sum = 0
    for i in range(1,n):
        Sum += Date[i];
    return Sum;

State = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

diff = (ReturnDay(a) + b ) - (ReturnDay(c) + d);

while diff < 0:
    diff += 7;

print(State[diff%7])