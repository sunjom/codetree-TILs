n = int(input());
arr = list(map(int,input().split()));
brr = list(map(int,input().split()));

arr.sort();
brr.sort();

if(arr == brr):
    print('Yes')
else:
    print('No');