a,b = list(map(int,input().split()))

arr = list(map(int,input().split()))



def func(m):
    Sum = arr[m-1];
    while(m > 1):
        if(m %2 == 1):
            m -=1
        else:
            m /= 2
            m = int(m);
        Sum += arr[m-1];
    return Sum;

print(func(b));