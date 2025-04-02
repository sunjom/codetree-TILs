N, B = map(int, input().split())

# Please write your code here.
List = []

while True:
    if(N < B):
        List.append(N)
        break
    List.append(N%B)
    N //= B

for i in List[::-1]:
    print(i,end="")
