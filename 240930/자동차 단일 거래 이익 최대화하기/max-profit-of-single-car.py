n = int(input());
arr = list(map(int,input().split()));
maxVal = 0;
for i in range(n):
    Pass = True;
    for e in range(i+1,n):
        if(arr[i] < arr[e]):
            if(arr[e] - arr[i] > maxVal):
                maxVal = arr[e] - arr[i]
        else:
            break;
print(maxVal);