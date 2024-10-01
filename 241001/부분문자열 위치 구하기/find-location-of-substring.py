import sys;
Input = input();
Search = input();

idx = Input[0]
for i in range(len(Input)):
    
    if(i + len(Search)-1 >= len(Input)):
        break;
    
    Find = True;
    for j in range(len(Search)):
        if(Input[i+j] != Search[j]):
            Find= False;
    if Find:
        print(i)
        sys.exit(0)
print(-1);