Input = input()
Search = input()
i = 0
while(i < len(Input)):
    if(i+len(Search) > len(Input)):
        break
    Bool = True
    if(Input[i] == Search[0]):
        for e in range(len(Search)):
            if(Input[i+e] != Search[e]):
                Bool = False
                break
        if(Bool):
            Input = Input[:i] + Input[i+len(Search):]
            i = 0
            continue
    i+=1
print(Input);