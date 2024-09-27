a,b = map(int,input().split());
arr = list(map(int, input().split()));
brr = list(map(int,input().split()));
CHK = False;
if(b > 1):
    num = brr[0];
else:
    num = b;

check = 0
if(arr.count(num) >= 1):
    check = arr.index(num);
    CHK = True;
if(CHK):
    Bool = False;
    for i in range(check, len(arr)-1):
        if(arr[i:i+b] == brr):
            Bool = True;
            break
    if(Bool):
        print("Yes");
    else:
        print("No");