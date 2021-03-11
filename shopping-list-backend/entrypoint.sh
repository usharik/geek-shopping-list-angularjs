#!/usr/bin/env sh

/usr/bin/java -Xmx256m -Xss512k -XX:-UseContainerSupport \
              -jar /apps/app.jar