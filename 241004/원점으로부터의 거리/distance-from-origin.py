n = int(input());


Arr = []

def Distance(x,y):
    return abs(x) + abs(y)

for i in range(1,n+1):
    x,y = list(map(int,input().split()));
    Arr.append((Distance(x,y),i));


Arr.sort(lambda x: (x[0],x[1]))

for i in Arr:
    print(i[1]);