n = int(input())
name = []
height = []
weight = []
for _ in range(n):
    n_i, h_i, w_i = input().split()
    name.append(n_i)
    height.append(int(h_i))
    weight.append(int(w_i))

# Please write your code here.

class student:
    def __init__(self,name,height,weight):
        self.name = name
        self.height =height
        self.weight = weight


List = [student(name[i],height[i],weight[i]) for i in range(n)]

List.sort(lambda x : (x.height,-x.weight))

for i in List:
    print(f"{i.name} {i.height} {i.weight}")