n = int(input())
sequence = list(map(int, input().split()))

# Please write your code here.

answer = []
List = sequence.copy()
List.sort()


for i in range(n):
    idx = List.index(sequence[i])
    answer.append(idx+1)
    List.pop(idx)
    List.insert(idx,0)


for i in answer:
    print(i,end=" ")
    