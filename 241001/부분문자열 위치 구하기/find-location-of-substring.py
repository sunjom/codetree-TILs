Input = input();
Object = input();
clear = False;
num = 0;
for i in range(len(Input)):
    if(Input[i] == Object[0]):
        num = i;
        e = 0
        for e in range(1,len(Object)):
            if(Input[e] != Object[e]):
                break;
        
        if(e == len(Object)-1):
            clear=True;
            break;

if(clear):
    print(num);
else:
    print(-1);