# BEFORE DELETING ORDERS IS LIKE:
collection1 = db.orders
for rec1 in collection1.find():
    print(rec1)

print("\n")

# DELETING DOCUMENT WITH ORD_ID=8
collection = db.orders
result = collection.delete_many({"ord_id": 8})

# AFTER DELETING, a DOCUMENT FROM ORDERS collection
collection1 = db.orders
for rec1 in collection1.find():
    print(rec1)