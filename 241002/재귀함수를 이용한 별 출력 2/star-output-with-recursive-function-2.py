n = int(input());

def Return(n):
    if(n == 0):
        return;
    print('* '*n)
    Return(n-1)
    print('* '*n);
Return(n);