import math
oneArr = list(map(int,input().split()))
twoArr = list(map(int,input().split()))
avgArr = [[],[],[]]
Sum = 0;
row = 0
for i in oneArr:
    row += i;
    Sum +=i;
avgArr[0].append(round(row/4,1))
row = 0
for i in twoArr:
    row += i;
    Sum +=i;
avgArr[0].append(round(row/4,1))

for i in range(4):
    col = (oneArr[i] + twoArr[i])/2;
    avgArr[1].append(round(col,1));

avgArr[2].append(round(Sum/8,1))

for i in avgArr:
    for e in i:
        print(e,end=" ")
    print();