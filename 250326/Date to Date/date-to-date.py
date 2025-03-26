m1, d1, m2, d2 = map(int, input().split())

# Please write your code here.
date = [0,31,28,31,30,31,30,31,31,30,31,30,31]

sumA = sum(date[i] for i in range(m1)) + d1
sumB = sum(date[i] for i in range(m2)) + d2

print(sumB - sumA+1)