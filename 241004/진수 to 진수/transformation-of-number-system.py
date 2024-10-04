a,b = list(map(int,input().split()));
n = list(map(int,input()))
Sum = 0

for i in range(len(n)):
    Sum += a * (len(n)-1 -i) * int(n[i]);
Sum += int(n[-1])
arr = []
while True:
    if(Sum < b):
        arr.append(Sum);
        break;
    arr.append(Sum %b);
    Sum //= b;

for i in range(len(arr)-1,-1,-1):
    print(arr[i],end="");