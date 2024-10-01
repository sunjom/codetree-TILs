a,b = list(map(int,input().split()));

arr = [list(map(int,input().split())) for _ in range(a)];
brr = [list(map(int,input().split())) for _ in range(a)];
Answer = [[0 for _ in range(b)] for _ in range(a)];

for i in range(a):
    for e in range(b):
        if(arr[i][e] == brr[i][e]):
            continue
        else:
            Answer[i][e] = 1

for i in Answer:
    for e in i:
        print(e, end=" ");
    print();