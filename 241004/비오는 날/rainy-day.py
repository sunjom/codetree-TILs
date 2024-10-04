n = int(input());
Arr = []
class RainDay:
    def __init__(self, day, week, state):
        self.day =day;
        self.week =week;
        self.state = state;
for i in range(n):
    day,week,state = tuple(input().split());
    Arr.append(RainDay(day,week,state));

LatestRain = -1

for i in range(n):
    if(Arr[i].state == 'Rain'):
        if(LatestRain == -1):
            LatestRain = i;
            continue;
        elif(Arr[LatestRain].day > Arr[i].day):
            LatestRain = i;
print(Arr[LatestRain].day,Arr[LatestRain].week,Arr[LatestRain].state)