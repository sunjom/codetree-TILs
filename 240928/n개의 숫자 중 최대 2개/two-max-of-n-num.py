num = int(input());
arr = list(map(int,input().split()));

for i in range(num):
    for e in range(i+1,num):
        if(arr[i] > arr[e]):
            arr[i],arr[e] = arr[e],arr[i]
print(arr[-1],arr[-2]);