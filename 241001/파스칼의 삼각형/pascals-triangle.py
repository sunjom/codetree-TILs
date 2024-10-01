n = int(input());

arr = [[0 for _ in range(n)] for _ in range(n)]
arr[0][0] = 1
for i in range(1,n):
    for e in range(i+1):
        if((e-1 < 0 and i-1 < 0)):
            continue
        arr[i][e] = arr[i-1][e-1] + arr[i-1][e]

for i in arr:
    for e in i:
        if(e == 0):
            break
        print(e, end =" ");
    print();