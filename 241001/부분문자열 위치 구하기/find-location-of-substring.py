Input = input();
Search = input();

idx = Input[0]
for i in range(len(Input)):
    Find = False;
    if(i + len(Search) > len(Input)):
        break
    
    if(Input[i] == Search[i]):
        idx=i;
        for e in range(len(Search)):
            if(not(Input[i+e] == Search[e])):
                Find=False;
                break;
            Find=True;
    if(Find):
        break;

if(Find):
    print(idx)
else:
    print(-1);