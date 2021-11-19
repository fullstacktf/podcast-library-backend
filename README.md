<p align="center">
  <img src="https://i.imgur.com/RIUSDGi.png" data-canonical-src="https://i.imgur.com/RIUSDGi.png" width="600" />
</p>
<hr />

# 🚀 Getting Started

- Make a fork of the project, clone it and run the following:
```
npm install
```

- Run:
```
npm run start
```

# 📜 Contributors:

- [@RafaGG21](https://github.com/RafaGG21)
- [@MariaLujanIbrahin](https://github.com/MariaLujanIbrahin)
- [@pheralb](https://github.com/pheralb)
- [@ririchi2](https://github.com/ririchi2)

# 📁 Project Structure:

```
    ├── controllers
        ├── podcasts.js
    ├── server.js
    ├── init       
    │   ├── 01_user.sql
    │   ├── 02_podcast.sql
    │   ├── 03_category.sql  
    ├── package.json
    ├── package-lock.json
```

# 🪄 Endpoints:

- ``GET - "/podcasts/all"`` - Returns all podcast.
- ``GET - "/podcasts/:id"`` - Returns podcast by ID.
- ``GET - "/podcasts/title/:title"`` - Returns a podcast by title.
- ``GET - "/podcasts/genre/:genre"`` - Returns podcasts by category.
- ``GET - "/podcasts/author/:author"`` - Returns podcasts by author.
- ``GET - "/best_podcasts/"`` - Returns a list of the best podcasts by genre.
- ``GET - "/users/:id"`` - Returns a user by id.
- ``POST - "/podcasts/:id"`` - add a podcast per id.
- ``POST - "/users/:id"`` - add a user per id.
- ``DELETE - "podcasts/:id"`` - Delete podcast by ID.
- ``DELETE - "/users/:id"`` - Delete user by ID.

# ⚙️ Tools:

<p align="center">
  <img align="left" width="32" height="32" src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/233_Node_Js_logo-256.png">
  <img align="left" width="32" height="32" src="https://i.imgur.com/DRfvmbz.png">
  <img align="left" width="32" height="32" src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg">
</p>
