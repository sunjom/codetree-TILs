a,b,c,d = list(map(int,input().split()));

def ReturnDay(n):
    Date = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    Sum = 0
    for i in range(1,n):
        Sum += Date[i];
    return Sum;

def num_of_days(m, d):
    # 계산 편의를 위해 월마다 몇 일이 있는지를 적어줍니다. 
    days = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    total_days = 0
    
    # 1월부터 (m - 1)월 까지는 전부 꽉 채워져 있습니다.
    for i in range(1, m):
        total_days += days[i]
    
    # m월의 경우에는 정확이 d일만 있습니다.
    total_days += d
    
    return total_days

State = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

diff = (num_of_days(c,d) ) - (num_of_days(a,b));

while diff < 0:
    diff += 7;

print(State[diff%7])