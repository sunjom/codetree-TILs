n = input();

Sum = 0;
for i in range(len(n)):
    Sum += 2**(len(n)-i-1) * int(n[i])
print(Sum);