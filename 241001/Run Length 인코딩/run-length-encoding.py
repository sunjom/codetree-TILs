Str = input()

count = 1
answer="";
for i in range(len(Str)-1):
    if(Str[i] == Str[i+1]):
        count+=1;
    else:
        answer+=Str[i]+str(count)
        count=1
answer += Str[-1]+str(count);

print(len(answer));
print(answer)