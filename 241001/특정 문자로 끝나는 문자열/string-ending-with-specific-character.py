arr = []
Check = True;
for i in range(11):
    arr.append(input());

for i in range(10):
    if(arr[i][-1] == arr[10]):
        Check = False;
        print(arr[i]);

if(Check):
    print("None")