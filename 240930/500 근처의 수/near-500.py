arr = list(map(int,input().split()));

Min = 1
Max = 1000
for i in arr:
    if(i < 500):
        if(Min < i):
            Min = i;
    else:
        if(Max > i):
            Max = i;
print(Min,Max);