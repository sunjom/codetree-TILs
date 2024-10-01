row,col = list(map(int,input().split()));
Answer = [[0 for _ in range(col)] for _ in range(row)]
num = 1;
for i in range(row):
    for e in range(col):
        checkRow = 0
        checkCol = 0
        while(i+checkRow < row and e- checkCol >=0):
            if(Answer[i+checkRow][e-checkCol] == 0):
                Answer[i+checkRow][e-checkCol] = num
                num +=1
            checkRow += 1
            checkCol +=1

for i in Answer:
    for e in i:
        print(e,end=" ");
    print();