############################################################
# Run Nodejs + Express + Nodemon ->
############################################################

# Imagen:
FROM node

# Directory:
RUN mkdir -p /src/

# Configure directory:
WORKDIR /src/

# Install packages:
COPY package.json .
RUN npm install

# Install Nodemon:
RUN npm install nodemon -g

# Copy app:
COPY . .

#Run app in port 8000
EXPOSE 8000

# Run app when container is running:
CMD nodemon -L --watch . src/server.js

# Run seed.js:
# RUN chmod +x ./run.sh
# RUN ./run.sh