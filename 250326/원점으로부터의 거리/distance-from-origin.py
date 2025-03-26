n = int(input())
points = [(int(i), tuple(map(int, input().split()))) for i in range(n)]

# Please write your code here.


points.sort(key = lambda x : (sum(abs(i) for i in x[1])))


for i in points:
    print(i[0]+1)