a,b = map(int,input().split());

arr = list(map(int, input().split()));
brr = list(map(int,input().split()));

check = arr.index(brr[0]);
if(check == -1):
    print('No');
else:
    Bool = False;
    for i in range(check, len(arr)-1):
        if(arr[i:i+b] == brr):
            Bool = True;
            break
    if(Bool):
        print("Yes");
    else:
        print("No");