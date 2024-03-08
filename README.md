<!-- # coding-test-node-js


## Instructions

Please implement CRUD functionality for managing post.  

Implementation expectations:

1. Close to a production ready app as possible
1. Readme.md file for instructions on how to run
1. Containerised app ready to ship api to a Kubernetes/Docker cluster
1. Apply TDD
1. Respect RESTful
1. Favour clean code, Design Pattern, Functional approach
1. Must use Github and send a url to a public Github url of your solution
	1. Please use git,  make incremental code commits to allows a history of you iterations. -->

# Demo Boilerplate Prod Ready on Node-Typescript-PostgreSQL-Jest

A demo project as test project using TypeScript, Sequelize ORM for PostgreSQL, and Jest for testing.

## Technologies Used

- Node.js
- TypeScript
- Sequelize ORM
- PostgreSQL
- Jest (for testing)

## Prerequisites

- Node.js installed
- PostgreSQL installed and running

## Getting Started

1. Clone the repository:

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your PostgreSQL database and update the configuration in `.env`:

   ```env
   DB_HOST=localhost
   DB_PORT=5432
   DB_NAME=yourdbname
   DB_USER=yourdbuser
   DB_PASSWORD=yourdbpassword
   ```

4. Start the application:

   ```bash
   npm run build
   ```

5. Start the application:

   ```bash
   npm run start
   ```

6. To run tests:

   ```bash
   npm run test
   ```

## Project Structure

Here's the key directories and files in project.

```
src/
|-- config 
|-- controllers/
|-- interfaces/
|-- models/
|-- routes/
|-- tests/
|-- services/
|-- utils/
|-- app.ts
|-- server.ts
```

## Configuration

Ask for .env file variables! 

## Scripts

- `npm run start`: Start the application.
- `npm run build`: Build the application.
- `npm run test`: Run tests.


## License

This project is licensed under the [MIT License](LICENSE).

---
