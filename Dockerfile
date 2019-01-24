FROM node:7
WORKDIR /app
RUN git clone https://github.com/Backpack-Technologies/messenger-bot.git
WORKDIR /app/messenger-bot
RUN npm install
CMD node index.js
EXPOSE 3000
EXPOSE 3100

