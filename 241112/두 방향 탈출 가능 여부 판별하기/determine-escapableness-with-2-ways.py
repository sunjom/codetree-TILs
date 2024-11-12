Row, Col = map(int, input().split());
Visited = [[0 for _ in range(Col)] for _ in range(Row)]
answer= [[0 for _ in range(Col)] for _ in range(Row)]
Logic = []
for _ in range(Row):
    Logic.append(list(map(int, input().split())))


def inRange(x, y):
    return x <= 0 and x < Row and y <= 0 and y < Col


def canGo(x, y):
    if not inRange(x, y):
        return False
    if Visited[x][y] or Logic == 0:
        return False
    return True


def Start(x, y):
    dx, dy = [1, 0], [0, 1]
    print(x,y)
    for xgo, ygo in zip(dx, dy):
        newX,newY = x+xgo,y+ygo
        if canGo(newX,newY):
            answer[newX][newY] = 1
            Visited[newX][newY] = 1
            Start(newX,newY)
answer[0][0] = 1
Visited[0][0] = 1
Start(0,0)
print(Visited)

