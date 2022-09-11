---
title: Database Architecture
tag: [relational database, architecture]
---

# Database Architecture

- Database stores critical information and it is necessary to implement a database where we can access the database quickly and securely.

- Types of DBMS Architecture:

    - 1-Tier Architecture
    - 2-Tier Architecture
    - 3-Tier Architecture

## 1-Tier Architecture

- In 1-Tier achitecture the database is directly available to the user, the user can directly interacti with the user and use it.

- Example: SQL server we setup in our local machine can be directly interected with command line.


## 2-Tier Architecture

- It is similar to client-server architecture.

- The application at client end directly communicates with the database at server-side.

- The server is responsible for working out the query provided.

- Client represents, the user interface and application programs.

- Advatange of using this architecture is maintenance and it is easier to understand.

- Disadvantage is that it gives poor performance in case of huge number of users.

![tier-2 and tier-3 architecture](https://miro.medium.com/max/560/1*IPS8EUQAU6lmsV81aPlGjA.jpeg)


## 3-Tier Architecture

- In 3-tier architecture, there is another layer between the client and the server.

- The client does not directly communicate with the server, it interacts with an application server which communicates with the database.

- After this the query and transactions are handled.

- This is widely used in web applications.
