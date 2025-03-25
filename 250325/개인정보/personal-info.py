n = 5
name = []
height = []
weight = []

for _ in range(n):
    n, h, w = input().split()
    name.append(n)
    height.append(int(h))
    weight.append(float(w))

# Please write your code here.
class Student:
    def __init__(self,name, height, weight):
        self.name = name
        self.height = height
        self.weight = weight

List = [Student(name[s],height[s],weight[s]) for s in range(len(name))]

List.sort(key = lambda x : x.name)
print("name")
for i in List:
    print(f"{i.name} {i.height} {i.weight}")

print()
List.sort(key = lambda x : -x.height)
print("height")
for i in List:
    print(f"{i.name} {i.height} {i.weight}")