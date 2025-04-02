n = int(input())
points = [(int(i), tuple(map(int, input().split()))) for i in range(n)]

# Please write your code here.

class distance:
    def __init__(self,x,y,idx):
        self.x = x
        self.y = y
        self.idx = idx +1

List = [distance(x,y,idx) for idx,(x,y) in points]

List.sort(lambda i : abs(i.x)+abs(i.y))

for i in List:
    print(i.idx)