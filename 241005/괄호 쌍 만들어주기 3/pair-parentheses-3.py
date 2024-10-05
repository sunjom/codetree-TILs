n = list(input())

count = 0;
for i in range(len(n)):
    if(n[i] == '('):
        for e in range(i,len(n)):
            if(n[e] == ')'):
                count +=1;

print(count);