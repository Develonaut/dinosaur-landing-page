ls#!/usr/bin/env bash
echo -e "GZIPPING ALL THE THINGS!";
extensions=( "html" "css" "js" )
for i in "${extensions[@]}"
do
  find ./build -name \*.$i -exec gzip --verbose --best --keep --force {} \;
done

echo -e "REMOVE .GZ EXTENSION";
extensions=( "" "/static/js" "/static/css" )
for i in "${extensions[@]}"
do
  for file in ./build$i/*.gz; do mv -v "$file" "${file%%.gz}"; done
done;

echo -e "UPLOADING NON GZIPPED FILES";
aws s3 cp ./build s3://dinosaur.design --recursive --exclude "*.js" --exclude "*.css" --exclude "*.html" --cache-control max-age=31536000
echo -e "UPLOADING AND ENCODING GZIPPED FILES";
aws s3 cp ./build s3://dinosaur.design --content-encoding gzip --recursive --exclude "*" --include "*.js" --include "*.css" --include "*.html" --cache-control max-age=31536000
