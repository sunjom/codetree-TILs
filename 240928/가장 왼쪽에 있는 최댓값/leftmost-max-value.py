n = input()
arr = [0] +list(map(int,input().split()));
MVal = arr.index(max(arr));
idx = [MVal]
while True:
    Marr = arr[:MVal]
    MVal = arr.index(max(Marr));
    idx.append(MVal);
    if(MVal == 1):
        break;
    
for i in idx:
    print(i , end=" ")