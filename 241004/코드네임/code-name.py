class Class:
    def __init__(self,Code='', Score=100):
        self.Code = Code;
        self.Score = Score;
Arr = []
for i in range(5):
    Code,Score = tuple(input().split());
    Arr.append(Class(Code,int(Score)));
Max = Class();
for i in Arr:
    if(Max.Score > i.Score):
        Max.Code = i.Code;
        Max.Score = i.Score;

print(Max.Code,Max.Score)