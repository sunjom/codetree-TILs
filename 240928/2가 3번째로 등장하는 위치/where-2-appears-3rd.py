num = input();
arr = list(map(int,input().split(" ")));
count = 0;
i = 0
for i in range(len(arr)):
    if(arr[i]==2):
        count+=1;
    if(count == 3):
        break;
print(i+1)