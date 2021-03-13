#!/usr/bin/env sh

echo "Starting to wait for MySQL at host '${1:-localhost}'"
while ! nc -z -v -w30 ${1:-localhost} 3306;
do
  echo Waiting for MySQL to be ready;
  sleep 5;
done;