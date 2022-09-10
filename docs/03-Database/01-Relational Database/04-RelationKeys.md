---
title: Keys
tag: [relational model, keys]
---

# Keys in Relational Database

- A key in RDBMS is an attribute or a set of attributes that help to uniquely identify a tuple in a relation.

- Keys are used to establish relationships between different tables and columns of a relational database.

## Types of Keys

There are 7 types of keys in DBMS. All these types of keys can be implemented in SQL. These are:

### Primary Key

- Primary key is a **column** of a table or a **set of columns** that helps to **identify every record present in that table uniquely**.

- There can only be one primary key in a table.

- Values in primary key can only be **unique**. There should be no duplicates.

- Primary key cannot have **NULL** value.


### Super Key

- Super Key is the set of all the keys which help to identify rows in a table uniquely.

- Primary Key is picked from the super key.

- Super Key is the superset of a candidate key.


### Candidate Key

- Candidate keys are those attributes that uniquely identify rows of a table.

- The Primary Key of a table is selecte from one of the candidate keys.

- There can be more than one candidate keys in a table.

- Every candidate key carries unique information and value.

### Alternate Key

- A table can have multiple choices for a primary key.

- However, it can choose only one. So, all the keys which did not become the primary key are called Alternate Keys.

### Foreign Key

- It is used to establish relationships between two tables.

- A foreign key will require each value in a column or set of column to match the **Primary Key** of referential table.

- Primary key of one table acts as a foreign key for another table. 

### Composite Key

- A Composite Key is a set of two or more attributes that help identify each tuple in a table.

- The attributes in the set may not be unqiue when considered seperately. However, together they will ensure uniqueness.

### Unique Key

- It is a column or set of columns that uniquely identify each record in a table.

- All values will have to be unique in this key.

- Unique Key is different from Primary Key because it can have one NULL value but Primary key cannot have NULL value.