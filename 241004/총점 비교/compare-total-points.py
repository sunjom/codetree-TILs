n = int(input());

class Class:
    def __init__(self,name,kor,eng,math):
        self.name, self.kor, self.eng, self.math = name,kor,eng,math;

Arr = []
for i in range(n):
    name,kor,eng,math = tuple(input().split());
    Arr.append(Class(name,int(kor),int(eng),int(math)));

Arr.sort(lambda x: x.kor + x.eng + x.math);

for i in Arr:
    print(i.name, i.kor, i.eng , i.math);