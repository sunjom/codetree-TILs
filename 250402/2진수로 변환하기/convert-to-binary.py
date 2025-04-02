n = int(input())

# Please write your code here.

List = []
while True:
    if(n < 2):
        List.append(n)
        break
    List.append(n%2)
    n //=2

for i in List[::-1]:
    print(i,end="")
