import sys

a,b = map(int,input().split());
arr = list(map(int, input().split()));
brr = list(map(int,input().split()));

for i in range(a):
    Bool = True;
    for e in range(b):
        if i+e >= a:
            Bool = False;
            break;
        if(arr[i+e] != arr[e]):
            Bool = False;
            break;
    
    if(Bool):
        print("Yes");
        sys.exit()
print("No");