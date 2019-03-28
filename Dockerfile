FROM node:8
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3005
CMD ["npm", "run", "start"]