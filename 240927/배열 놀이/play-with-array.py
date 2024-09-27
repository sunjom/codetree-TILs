n,q = map(int,input().split());

arr = list(map(int,input().split()));

for i in range(q):
    brr = list(map(int,input().split()));
    if(brr[0] ==1):
        print(arr[brr[1]-1]);
    elif(brr[0] == 2):
        num = 0;
        for i in range(len(arr)):
            if(arr[i] == brr[1]):
                num = i+1;
                break;
        print(num);
    else:
        for i in range(brr[1]-1, brr[2]):
            print(arr[i],end=" ");