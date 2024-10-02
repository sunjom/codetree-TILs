arr,num = input().split()

for i in range(int(num)):
    choose = int(input())
    if(choose == 1):
        arr = arr[1:] + arr[0]
        print(arr)
    if(choose == 2):
        arr = arr[-1] + arr[:-1]
        print(arr)
    if(choose == 3):
        arr = arr[::-1]
        print(arr)