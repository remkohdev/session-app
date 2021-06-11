#!/bin/bash

#URL=http://<>.us-south.containers.appdomain.cloud
URL=http://<>.lb.appdomain.cloud
#URL="$URL/nocookie"

lowerlimit=0
upperlimit=1000

useragent="user-agent-$lowerlimit"
curl -c cookies.txt -u "user1:password1" -A "$useragent" $URL
printf "\n"
for instance_nr in $(seq -f "%03g" $upperlimit $lowerlimit);
  do
    useragent="user-agent-$instance_nr"
    curl -b cookies.txt -u "user1:password1" $URL
    printf "\n"
  done