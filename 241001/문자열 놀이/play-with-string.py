arr,num = list(input().split());
arr = list(arr);

for i in range(int(num)):
    a,b,c = list(input().split());
    if(int(a) == 1):
        b,c = int(b),int(c)
        arr[b-1], arr[c-1] = arr[c-1] , arr[b-1]
        print("".join(arr));
    else:
        for i in range(len(arr)):
            if(arr[i] == b):
                arr[i] = c
        print("".join(arr))