n = int(input());

Arr = []

for _ in range(n):
    name,Kor,Eng,Math = tuple(input().split());
    Arr.append((name,int(Kor),int(Eng),int(Math)));


Arr.sort(key = lambda x: (-x[1],-x[2],-x[3]))

for name,Kor,Eng,Math in Arr:
    print(name,Kor,Eng,Math);