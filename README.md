# Discord Reaction Role Bot
To use, please edit the values in config/config.json with your bot token and message id to monitor.

For the bot to work you should:

- Create a role and an emoji of the same name
- Add manually all the reactions to the message
- Disable normal users from adding new reactions/emojis since this could potentially lead to someone adding the ADMIN named emoji and the bot would give out the admin role.

After this is setup, run: ```docker-compose build && docker-compose up -d```

If you wish to run this without docker, please run ```npm install``` and then ```node bot.js```

ToDO:
- Interactive setup
- Logs
- Role blacklist

PRs are welcome!
