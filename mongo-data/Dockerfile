############################################################
# Run script seed.js
############################################################

# Imagen:
FROM mongo

# Run script:
# RUN ./run.sh
COPY init.json /init.json
CMD mongoimport --host db --db podcast-library --collection podcast --type json --file /init.json --jsonArray