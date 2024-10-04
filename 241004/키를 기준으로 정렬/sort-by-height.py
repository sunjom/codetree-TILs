n = int(input());
Arr = []
for i in range(n):
    name,height,weight = input().split();
    Arr.append((name,height,weight));

Arr.sort(lambda x:x[1]);

for name,height,weight in Arr:
    print(name,height,weight);