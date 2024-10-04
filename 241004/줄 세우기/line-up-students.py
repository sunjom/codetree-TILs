n = int(input());

Arr = []
for i in range(1,n+1):
    height, weight = tuple(input().split());
    Arr.append((int(height),int(weight),i))

Arr.sort(lambda x:(-x[0],-x[1],x[2]))

for i in Arr:
    print(i[0],i[1],i[2])