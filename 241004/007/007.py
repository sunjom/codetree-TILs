Input = list(input().split());

class Class:
    def __init__(self,code,point,time):
        self.code = code;
        self.point = point;
        self.time = time;

    def Show(self):
        print(f'secret code : {self.code}');
        print(f'meeting point : {self.point}');
        print(f'time : {self.time}');
a = Class(Input[0],Input[1],Input[2]);
a.Show()