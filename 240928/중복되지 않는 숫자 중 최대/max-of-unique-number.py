num = input();
arr = list(map(int,input().split()));
nrr = [0]*(max(arr)+1);

for i in arr:
    nrr[i]+=1;

max = 0

for i in range(1,len(nrr)):
    if(nrr[i] ==1):
        max = i;
print(max);