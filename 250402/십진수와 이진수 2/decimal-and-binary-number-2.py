N = input()

# Please write your code here.
Sum = 0
for i in range(len(N)):
    Sum = Sum * 2 + int(N[i])

Sum *= 17
List = []
while True:
    if(Sum < 2):
        List.append(Sum)
        break
    List.append(Sum%2)
    Sum //=2

for i in List[::-1]:
    print(i,end="")