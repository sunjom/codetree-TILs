n = int(input())
name = []
street_address = []
region = []

for _ in range(n):
    n_i, s_i, r_i = input().split()
    name.append(n_i)
    street_address.append(s_i)
    region.append(r_i)

# Please write your code here.
class Local:
    def __init__(self,name,street,region):
        self.name = name
        self.street = street
        self.region = region

List = []
for i in range(n):
    List.append(Local(name[i],street_address[i],region[i]))

List.sort(key = lambda x : x.name, reverse=True)

print(f"name {List[0].name}")
print(f"addr {List[0].street}")
print(f"city {List[0].region}")