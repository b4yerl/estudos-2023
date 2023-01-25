#!/bin/bash

: '
  Script número 2 do módulo
  Mantive o modelo com for
'
echo -e "\n~~ Countdown Timer ~~\n"
if [[ $1 -gt 0 ]]
then
  for (( i = $1; i >= 0; i-- ))
  do
    echo $i
  done
else
  echo Include a positive integer as the first argument
fi