############################################################
# Import ./init.json in Docker (podcast-library-bd) ->
############################################################

# Imagen:
FROM mongo

# Run script:
# RUN ./run.sh
COPY init.json /init.json
CMD mongoimport --host db --db podcast-library --collection podcasts --type json --file /init.json --jsonArray