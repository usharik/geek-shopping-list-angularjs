#!/usr/bin/env sh

/usr/bin/java -Xmx256m -Xss512k -XX:PermSize=100m \
              -jar /apps/app.jar