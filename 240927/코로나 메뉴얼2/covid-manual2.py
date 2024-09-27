count = [0,0,0,0]
for i in range(3):
    a,b = input().split(" ")
    if(a == 'Y' and int(b) >= 37):
        count[0]+=1;
    elif(a == 'N' and int(b) >=37):
        count[1]+=1;
    elif(a=='Y' and int(b) <37):
        count[2]+=1;
    else:
        count[3]+=1;
for i in count:
    print(i,end=" ");
if(count[0] >=2):
    print('E')