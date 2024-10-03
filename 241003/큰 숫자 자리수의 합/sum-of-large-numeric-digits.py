arr = list(map(int,input().split()));
def Return(n):
    if n < 10:
        return n
    
    return Return(n//10) + n%10
print(Return(arr[0]*arr[1]*arr[2]))