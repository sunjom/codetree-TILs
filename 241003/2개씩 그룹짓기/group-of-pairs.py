n = int(input());
arr = list(map(int,input().split()));

arr.sort();
Max = arr[0] + arr[-1]
for i in range(1,n):
    if(Max < arr[i]+arr[-i-1]):
        Max = arr[i] + arr[-i-1]
print(Max);