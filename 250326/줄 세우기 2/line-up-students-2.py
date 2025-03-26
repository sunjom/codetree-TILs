n = int(input())
students = [
    (h, w, i + 1)
    for i, (h, w) in enumerate([tuple(map(int, input().split())) for _ in range(n)])
]

# Please write your code here.

class student:
    def __init__(self,height, weight,idx):
        self.height = height;
        self.weight = weight;
        self.idx = idx


List = [student(i[0],i[1],i[2]) for i in students]

List.sort(key = lambda x : (x.height,-x.weight))

for i in List:
    print(f"{i.height} {i.weight} {i.idx}")
