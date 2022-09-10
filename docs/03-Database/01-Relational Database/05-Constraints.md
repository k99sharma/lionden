---
title: Constraints in Relational Model
tag: [relational database, constraints]
---

# Constraints in Relational Model

- Relational models makes use of some rules to ensure the accuracy and accessibility of the data.

- These rules or constraints are known as **Relational Integrity Constraints**.

- These constraints are checked before performing any operation like insertion, deletion, or updation on the data present in a relational database.

- These constraints include:

    - **Domain Constraint**: It specifies that every attribute is bound to have a value that lies inside a specific range of values. For example, Age attribute cannot be negative or less than 0.

    - **Key Constraint**: It states that every relation must contain an attribute or a set of attributes that can uniquely identify a tuple in that relation. This key can never be **NULL** or contains **duplicates**. For example, Roll Number can be primary key in Student Table as it contains all unique values.

    - **Referential Integrity Constraint**: It is defined between two inter-related tables. It talks about foreign key.