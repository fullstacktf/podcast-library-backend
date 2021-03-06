<p align="center">
  <img src="https://i.imgur.com/RIUSDGi.png" data-canonical-src="https://i.imgur.com/RIUSDGi.png" width="600" />
</p>
<hr />

# π Getting Started

- π Requirements:

- [Nodejs 12+](https://nodejs.org/es/).
- [Docker](https://www.docker.com/get-started) installed.

1. Make a fork of the project, clone it and run the following:

```
npm install
```

2. Create an .env file with the following information and replace port: 

```
DB_CONNECTION=mongodb://db:PORT/podcast-library
```

3. Run in your Linux terminal:

```
bash start.sh
```

4. Access:

```
http://localhost:3001/
```

# π Contributors:

- π» [Ricardo Pineda - @ririchi2](https://github.com/ririchi2)
- π» [Pablo HernΓ‘ndez - @pheralb](https://github.com/pheralb)
- π» [Rafael Gandolfo - @RafaGG21](https://github.com/RafaGG21)
- π» [MarΓ­a Lujan - @MariaLujanIbrahin](https://github.com/MariaLujanIbrahin)

# π Project Structure:

```
    βββ mongo-data
       βββ db
          βββ seed.js
       βββ Dockerfile
       βββ init.json  
    βββ src
       βββ controllers
       βββ models       
       βββ server.js      
    βββ .dockerignore
    βββ docker-compose.yml
    βββ Dockerfile
    βββ package-lock.json
    βββ package.json
    βββ README.md
    βββ run.sh
    βββ start.sh
```

# πͺ Endpoints:

- ``GET - "/podcasts/all"`` - Returns all podcast.
- ``GET - "/podcasts/:id"`` - Returns podcast by ID.
- ``GET - "/podcasts/title/:title"`` - Returns a podcast by title.
- ``GET - "/podcasts/genre/all"`` - Returns all categories.
- ``GET - "/podcasts/genre/:genre"`` - Returns podcasts by category.
- ``GET - "/podcasts/author/:author"`` - Returns podcasts by author.
- ``POST - "/podcasts/insert"`` - Add a podcast.
- ``DELETE - "podcasts/:id"`` - Delete podcast by ID.

- ``GET - "/user/all"`` - Returns all users.
- ``GET - "/user/:id"`` - Returns a user by id.
- ``DELETE - "/user/:id"`` - Delete user by ID.
- ``POST - "/user/register"`` - Register a user.
- ``POST - "/user/login"`` - Login a user.

# βοΈ Tools:

<p align="center">
  <img align="left" width="32" height="32" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png">
  <img align="left" width="32" height="32" src="https://i.imgur.com/DRfvmbz.png">
  <img align="left" width="32" height="32" src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg">
</p>
