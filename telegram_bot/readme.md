# Home Bot

Simple house bot, can say hello worlds so far, but he will be learning fast




## PM2

the bot is using PM2 for scheduling the script

install pm2 locally `npm install -g pm2`

add pm2 to PATH: `export $PATH = /opt/nodejs/lib/node_modules/pm2/:$PATH`

stop application `pm2 stop simplebot`

start when it is stopped:  `pm2 start simplebot`

register a new application: `pm2 start index.js --name simplebot`

check status of an application: `pm2 list`

## Start Bot

`node index.js`




