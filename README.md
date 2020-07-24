# Help The Aged
## Introduction
FS app.
The project is to make the link between Old People who need support with errands or companionship with local volunteers.
## How does it work?
- Database
Many to many DB with 3 tables: Helper Sign Up, Activity & Joining Table with activity numbers and user numbers
- Homepage
HP where the user can sign up to offer to help old people in theire area
- Map
It renders a marker on every postcode for which a Helper has posted their profile + a description card.
- Map Filter
You can filter the Helpers by activities
## Technologies
React.js
Node.js
Express
mySQL
Datagrid
## Set up
- Node.js environement set up
- MySQL database: 'npm run migrate' in your command line to migrate database.js
- Create .env in main repository with the following:
DB_HOST=
DB_USER=
DB_NAME=
DB_PASS=
- Router: npm install --save react-router-dom

## API Routes (3 pages)
## DB schema
## User Flow Diagram

## Notes
_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
