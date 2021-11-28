#!/bin/sh
echo hola
cd docker-entrypoint-initdb.d
mongosh < seed.js