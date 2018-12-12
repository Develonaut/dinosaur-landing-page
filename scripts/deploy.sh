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

echo -e "CLEARING THE S3 BUCKETS";
aws s3 rm  s3://dinosaur.design --recursive
echo -e "UPLOADING NON GZIPPED FILES";
aws s3 cp ./build s3://dinosaur.design --recursive --exclude "*.js" --exclude "*.css" --exclude "*.html" --cache-control max-age=31536000
echo -e "UPLOADING AND ENCODING GZIPPED FILES TO WWW DOMAIN BUCKET";
aws s3 cp s3://dinosaur.design --content-encoding gzip --content-type text/javascript --recursive --exclude "*" --include "*.js" --cache-control max-age=31536000
aws s3 cp s3://dinosaur.design --content-encoding gzip --content-type text/css --recursive --exclude "*" --include "*.css" --cache-control max-age=31536000
aws s3 cp s3://dinosaur.design --content-encoding gzip --content-type text/html --recursive --exclude "*" --include "*.html" --cache-control max-age=31536000
echo -e "CLEARING CACHE";
aws cloudfront create-invalidation --distribution-id E3V346L71EO7S7 --paths "/*"

