binary = input()

# Please write your code here.

Sum = 0
for i in range(len(binary)):
    Sum = Sum * 2 + int(binary[i])
print(Sum)