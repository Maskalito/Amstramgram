# Amstramgram

This project is a Instragram clone creating to improve my competencies in React, Typescript PostgreSQL and HTML/CSS.

## Features

- [IN DEV] Register
- [IN DEV] Login
- [IN DEV] Modify profil
- [IN DEV] Send messages to other users

## Clone the project

```bash
git clone git@github.com:Maskalito/Amstramgram.git
```

## Setup database

1. Install PostgreSQL on your machine

2. Create database

```bash
psql -U postgres -d postgres
```
```psql
CREATE DATABASE amstramgram
```
3. Create tables

```bash
psql -U maskal -d amstramgram -f create_tables.sql
```

4. Fill database

```bash
psql -U maskal -d amstramgram -f fill_db.sql
```
## Setup env variables

### Add env variables

Open server/.env.exemple and add :

```sql
AMSTRAM_USER=postgres
AMSTRAM_HOST=localhost
AMSTRAM_PORT=5432
AMSTRAM_DATABASE=amstramgram
AMSTRAM_PASSWORD=postgres
API_PORT=3001
```

## Run the project

1. Open two terminals

2. Run the backend

Move to server directory
```bash
cd server
```

Run the server
```bash
node src/index.js
```

3. Run the app

Move to app directory
```bash
cd app
```

Run the server
```bash
npm start
```

3. Enjoy !

## Technologies Used

- React: A JavaScript library for building user interfaces.
- TypeScript: A typed superset of JavaScript that helps improve code quality and maintainability.
- Axios: A popular library for making HTTP requests.
- Express : Used for build to build the API.
- PostgreSQL : A powerful, open source object-relational database system.
- CSS: Styling the user interface.

