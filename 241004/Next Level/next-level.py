class Class:
    def __init__(self, id='codetree', level='10'):
        self.id = id;
        self.level = level;
    
    def Show(self):
        print(f'user {self.id} lv {self.level}')

id, level = tuple(input().split());

a = Class();
b = Class(id,level);
a.Show();
b.Show();