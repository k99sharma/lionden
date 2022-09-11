---
title: Relational Model
tag: [relational database, relational model]
---

# Relational Model

- The relational model for database management is an approach to logically represent and manage the data stored in a database.

- The data is organized into a **collection of two-dimensional inter-related tables** known as **Relations**.

- Each relation is a collection of columns and rows, where column represents the **attributes** of an entity and rows also called **tuples** represents **records**.

- This data model provides easy data sorting and data access. Hence, it is used for data storage and processing.

**Let's look at a scenario to understand the relational model :**

Consider a case where you wish to store the name, the CGPA attained, and the roll number of all the students of a particular class. This data can be stored in a table as shown below.

| Student Table (Relation) |
| :-----: |

| Roll Number (PK) | Name | CGPA |
| :---  | :---: | ---: |
| 001 | Vaibhav | 9.1 |
| 002 | Neha | 9.5 |
| 003 | Harsh | 8.5 |
| 004 | Shreya | 9.3 |

**As we can notice from above relation:**

- Any given row of relation indicates a student.
- The columns of the table indicate the attributes related to the entity.


## Relational Model Concepts

Relational database is based on the relational model. This database consists of various components based on the relational model. These include:

- **Relation**: Two-dimensional table used to store a collection of data elements.

- **Tuple**: Row of the relation, depicting a real-world entity.

- **Attributes**: Column of relation, depicting properties.

- **Attribute Domain**: Set of pre-defined atomic value that an attribute can take.

- **Degree**: It is total number of attributes present in relation.

- **Cardinality**: It specifies number of entites involved in the relation.

- **Relational Schema**: It is the logical blueprint of relation. It describes the design and strucutre of the relation.

```
    TABLE_NAME(ATTRIBUTE_1 TYPE_1, ATTRIBUTE_2 TYPE_2, ...)
```

For out **Student Relation** example, the relation schema will be:

``` 
    STUDENT(ROLL_NUMBER INTEGER, NAME VARCHAR(20), CGPA FLOAT)
```

## Advantages of Relational Model

The advantages and reasons due to which the relational model in DBMS is widely used are:

- **Simple and Easy to use**: Storing data in table is much easier to understand and implement.

- **Manageability**: Because of the independent nature of each relation in RDBMS, it is easy to manipulate and manage.

- **Query Capability**: With introduction of relational algebra, relational databases provides easy access to data via query language like SQL.

- **Data Integrity**: Using relational constraints, the relational model can maintain data integrity in database.

## Disadvantages of Relational Model

The main disadvantages of relational model occurs while dealing with huge amount of data as:

- Performance of relational model depends upon the number of relations present in database.

- As number of table increases, the requirement of physical memory increases.

- The strucutre becomes complex and there is a decrease in the response time for the queries.

- Because of this, the cost of implementing a relational database increase.

