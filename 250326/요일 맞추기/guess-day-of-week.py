m1, d1, m2, d2 = map(int, input().split())

# Please write your code here.

days = [0,31,28,31,30,31,30,31,31,30,31,30,31]
week = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

hapA = sum(days[i] for i in range(m1)) + d1
hapB = sum(days[i] for i in range(m2)) + d2

num = hapB-hapA
while num < 0:
    num += 7

print(week[num])
