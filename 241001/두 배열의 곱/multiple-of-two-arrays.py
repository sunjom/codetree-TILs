arr = [list(map(int,input().split())) for _ in range(3)]
input()
brr = [list(map(int,input().split())) for _ in range(3)]
sumArr = [[],[],[]];
for i in range(3):
    for e in range(3):
        sumArr[i].append(arr[i][e] * brr[i][e]);

for i in sumArr:
    for e in i:
        print(e,end=" ");
    print()