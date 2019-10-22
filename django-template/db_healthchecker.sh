#!/bin/bash

retry_counter=10
is_result=0
exit_code=1

for ((i=0 ; i<$retry_counter ; i++))
do
  echo 'exit' | python manage.py dbshell
  exit_code=$?
  if [ $exit_code = 0 ]; then
    echo '[db_healthchecker.sh] Success: Connected to Database!!'
    is_result=0
    break
  else
    echo '[db_healthchecker.sh] Error: Unable to connect to database.'
    echo '[db_healthchecker.sh] exit code: ' $exit_code
    is_result=1
    sleep 3
  fi
done

if [ $exit_code -ne 0 ]; then
  echo '[db_healthchecker.sh] Failed connect to database!!'
fi
