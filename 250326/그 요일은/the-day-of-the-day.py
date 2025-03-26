m1, d1, m2, d2 = map(int, input().split())
A = input()

# Please write your code here.

days = [0,31,29,31,30,31,30,31,31,30,31,30,31]
weeks = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

idx = weeks.index(A)
hapA = sum(days[i] for i in range(m1)) + d1 
hapB = sum(days[i] for i in range(m2)) + d2

Sum = hapB - hapA
if(Sum <= 0):
    print(0)
else:
    count = Sum // 7 
    Sum %= 7

    if(idx <= Sum):
        count += 1
    print(count)


    